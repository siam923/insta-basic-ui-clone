import Post from './Post';

const POSTS = [
  {
    id: '123',
    username: 'siam923',
    userImg: 'https://links.papareact.com/3ke',
    img: "https://links.papareact.com/3ke",
    caption: "Have Fun doing and learning projects withreact",
  },
  {
    id: '123',
    username: 'siam923',
    userImg: 'https://links.papareact.com/3ke',
    img: "https://links.papareact.com/3ke",
    caption: "Have Fun doing and learning projects withreact",
  },
  {
    id: '123',
    username: 'siam923',
    userImg: 'https://links.papareact.com/3ke',
    img: "https://links.papareact.com/3ke",
    caption: "Have Fun doing and learning projects withreact",
  },
  {
    id: '123',
    username: 'siam923',
    userImg: 'https://links.papareact.com/3ke',
    img: "https://links.papareact.com/3ke",
    caption: "Have Fun doing and learning projects withreact",
  },
]


function Posts() {
  return (
    <div>
      {POSTS.map((post)=> (
        <Post key=
          {post.id} 
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
      
    </div>
    );
}

export default Posts;
