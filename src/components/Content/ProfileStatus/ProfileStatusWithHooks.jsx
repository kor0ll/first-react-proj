import React, { useState } from "react";
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    let toggleEditMode = () => {
        setEditMode(!editMode);
    }

    let changeStatusText = (e) => {
        setStatus(e.target.value)
    }

    let updateStatus = () => {
        props.updateStatusThunk(status);
        toggleEditMode();
    }

    return <div>
        {!editMode && <div>
            <span onDoubleClick={toggleEditMode}>{props.status || "-------------"}</span>
        </div>
        }
        {editMode && <div className={s.toggleStatusWrapper}>
            <input value={status} autoFocus onChange={changeStatusText} />
            <button onClick={updateStatus}>Изменить статус</button>
        </div>
        }
    </div>

}

export default ProfileStatusWithHooks;