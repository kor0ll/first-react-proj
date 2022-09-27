import s from "./MainContent.module.css";
import Post from "./Post/Post";
import Post_generator from "./Post_generator/Post_generator";
import Profile from "./Profile/Profile";

var profile_info = {
    'main_pic': "https://images.wallpaperscraft.ru/image/single/most_kamni_reka_gorod_gorod_na_vode_otrazhenie_58661_2560x1600.jpg",
    "avatar_pic": "https://cyberofsport.com/wp-content/uploads/2022/02/mgidarccontentnick.comc008fa9d_d.0.jpg",
    "name": 'Oleg Korolev',
    'age': 21,
    'town': 'Moskow'
}

function MainContent() {
    return (
        <div className={s.main_content}>
          <img className={s.profile_main_pic} src={profile_info['main_pic']} alt="profile-pic" />
        <Profile avatar={profile_info['avatar_pic']} name={profile_info['name']} age={profile_info['age']} town={profile_info['town']} />
        <Post_generator />
          <div className="all-posts">
            <Post avatar={profile_info['avatar_pic']} message="Hi, how are you?"/>
            <Post avatar={profile_info['avatar_pic']} message="This is my first post!"/>
          </div>
        </div>
    )
};

export default MainContent;