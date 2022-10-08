import s from "./MainContent.module.css";
import Post from "./Post/Post";
import Post_generator from "./Post_generator/Post_generator";
import Profile from "./Profile/Profile";

function MainContent(props) {
  console.log(props.state.profileInfo.age);
  return (
    <div className={s.main_content}>
      <img className={s.profile_main_pic} src={props.state.profileInfo.mainPic} alt="profile-pic" />
      <Profile avatar={props.state.profileInfo.avatarPic} name={props.state.profileInfo.name} age={props.state.profileInfo.age} town={props.state.profileInfo.town} />
      <Post_generator />
      <div className="all-posts">
        {
        props.state.postsData.map((p) => <Post avatar={props.state.profileInfo.avatarPic} message={p.message} />)
        }
      </div>
    </div>
  )
};

export default MainContent;