import userPic from '../img/up.jpg';

const TwitterInfo = () => {
  return (
    <div className="twitter-info">
      <a href="https://twitter.com/jennhbhj">
        <img
          className="prof-pic"
          src={userPic}
          alt="user pic: jeonging in grey hoodie"
        />
      </a>
      <div className="info">
        <h1>
          <a href="https://twitter.com/jennhbhj">malignant royal bitch</a>
        </h1>
        <span>
          <a href="https://twitter.com/jennhbhj">@jennhbhj</a>
        </span>
      </div>
    </div>
  );
};

export default TwitterInfo;
