import React from "react";
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    //локальный state
    state = {
        editMode: false
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode
        })
    }


    render() {
        return <div>

            {!this.state.editMode && <div>
                <span onDoubleClick={this.toggleEditMode.bind(this)}>{this.props.status}</span>
            </div>
            }
            {this.state.editMode && <div className={s.toggleStatusWrapper}>
                <input value={this.props.status} autoFocus/>
                <button onClick={this.toggleEditMode.bind(this)}>Изменить статус</button>
            </div>
            }
        </div>
    }
}

export default ProfileStatus;