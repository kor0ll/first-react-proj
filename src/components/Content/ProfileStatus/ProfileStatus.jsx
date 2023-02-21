import { logDOM } from "@testing-library/react";
import React from "react";
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    newStatus = React.createRef();
    //локальный state
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    updateStatus = () => {

        console.log(this.state.status);

        this.props.updateStatusThunk(this.state.status);

        this.toggleEditMode();
    }

    changeStatusText = (e) => {
        this.setState({
                status: e.currentTarget.value
        })
    }


    render() {
        return <div>

            {!this.state.editMode && <div>
                <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
            </div>
            }
            {this.state.editMode && <div className={s.toggleStatusWrapper}>
                <input value={this.state.status} autoFocus onChange={this.changeStatusText}/>
                <button onClick={this.updateStatus}>Изменить статус</button>
            </div>
            }
        </div>
    }
}

export default ProfileStatus;