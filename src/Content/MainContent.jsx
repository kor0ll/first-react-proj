import s from "./MainContent.module.css";
import Post from "./Post/Post";
import Post_generator from "./Post_generator/Post_generator";
import Profile from "./Profile/Profile";

let profile_info = {
    'main_pic': "https://images.wallpaperscraft.ru/image/single/most_kamni_reka_gorod_gorod_na_vode_otrazhenie_58661_2560x1600.jpg",
    "avatar_pic": "https://cyberofsport.com/wp-content/uploads/2022/02/mgidarccontentnick.comc008fa9d_d.0.jpg",
    "name": 'Oleg Korolev',
    'age': 21,
    'town': 'Moskow'
}

let postsData = [
  {id: 1, message: "Hi, how are you?"},
  {id: 2, message: "This is my first post!"}
];

let postsElements = postsData.map( (p) => <Post avatar={profile_info['avatar_pic']} message={p.message}/> )

function MainContent() {
    return (
        <div className={s.main_content}>
          <img className={s.profile_main_pic} src={profile_info['main_pic']} alt="profile-pic" />
        <Profile avatar={profile_info['avatar_pic']} name={profile_info['name']} age={profile_info['age']} town={profile_info['town']} />
        <Post_generator />
          <div className="all-posts">
            { postsElements }
          </div>
        </div>
    )
};

export default MainContent;