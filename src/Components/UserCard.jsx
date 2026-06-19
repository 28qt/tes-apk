import { useState } from "react";

function UserCard({ user }) {
  const [likes, setLikes] = useState(0);
  const [followed, setFollowed] = useState(false);

  return (
    <div className="card">
      <img
        className="cover"
        src={`https://picsum.photos/500/700?random=${user.id}`}
        alt={user.name}
      />

      <div className="overlay"></div>

      <img
        className="avatar"
        src={`https://i.pravatar.cc/150?img=${user.id}`}
        alt={user.name}
      />

      <div className="card-content">
        <h2>{user.name}</h2>

        <p>
          <strong>Username:</strong> {user.username}
        </p>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <div className="btn-group">
          <button
            className="like-btn"
            onClick={() => setLikes(likes + 1)}
          >
            ❤️ {likes}
          </button>

          <button
            className="follow-btn"
            onClick={() => setFollowed(!followed)}
          >
            {followed ? "Following" : "Follow"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;