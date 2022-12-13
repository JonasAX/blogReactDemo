import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/3490257/pexels-photo-3490257.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="post"
      />
      <div className="postInfo">
        <div className="postCats">
            <div className="postCat">Music</div>
            <div className="postCat">Life</div>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet. </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatum expedita possimus aliquid nihil? Voluptatibus corporis animi totam! Aliquam maxime debitis error enim voluptas quis doloremque dolorum vitae ea vero. Voluptas, molestias vitae voluptatibus consequuntur veniam nulla fuga tempore dolorum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id doloremque facere praesentium recusandae autem fugit quisquam repellendus quaerat eos non? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quos quibusdam quidem libero quam ut quia officia. Modi hic unde a non quis deleniti veritatis tenetur doloribus minima expedita at beatae, inventore tempore iusto officiis in iste consequuntur! Necessitatibus labore rem eligendi! Dicta fugit autem dolores ab eos sequi mollitia eius architecto iste rerum ratione, praesentium ex fugiat molestiae eveniet maiores velit, dignissimos ut accusantium saepe in soluta inventore. Ut, voluptatum rem iusto reprehenderit fugit laudantium dolorum ipsa cum laborum provident beatae nulla est labore repudiandae corporis a recusandae, nobis similique qui sint libero officiis placeat dolor! Dignissimos, excepturi totam.
      </p>
    </div>
  );
}
