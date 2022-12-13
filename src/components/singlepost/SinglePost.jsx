import "./singlepost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&h=400&dpr=1"
          className="singlePostImg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i class="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Jonas</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor reprehenderit ullam impedit asperiores, nulla quis deserunt modi quas porro delectus dolorem ex ut rerum tenetur explicabo assumenda expedita molestias consectetur maiores consequuntur dolorum iure. Quibusdam perspiciatis tenetur dolorum vel. Optio nihil dolorem, facere totam consequuntur necessitatibus magnam debitis nemo amet a sint placeat unde, eius vero qui nam, ullam maiores. Saepe corrupti fugiat rerum adipisci necessitatibus autem obcaecati dolorum placeat recusandae magni minima laborum voluptatum voluptas modi iusto officia eum minus dignissimos distinctio, alias unde? Quaerat ea ex laudantium assumenda neque repellendus voluptatibus sit iste eos ab animi corrupti iure ratione vero aliquam quidem mollitia explicabo dolores quasi adipisci, pariatur magnam obcaecati asperiores saepe? Reprehenderit rerum dolore cum ullam esse natus quas molestiae reiciendis! Nobis pariatur vitae nemo aspernatur dolore est aliquid quasi, vero adipisci dignissimos. Rem, cumque nam earum voluptate, recusandae, harum provident commodi non fugit aliquam maxime laudantium magni consectetur iure labore. Qui veniam dolorum autem illum quasi maiores beatae earum nobis odit. Iure similique quidem, ratione eius quibusdam provident doloribus accusamus doloremque reiciendis cupiditate harum possimus neque molestias voluptatum placeat cumque modi distinctio ducimus ea rem velit fugit dignissimos praesentium! Obcaecati, a. Voluptate ad repellat magni in.</p>

      </div>
    </div>
  );
}
