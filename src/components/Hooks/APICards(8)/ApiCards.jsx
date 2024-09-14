import axios from "axios";
import React, { useEffect, useState } from "react";

function APICards() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((Road) => {
      console.log(Road.data);
      setPosts(Road.data);
    });
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {posts.map((post) => (
          <div
            style={{
              border: "1px solid gray",
              borderRadius: "10px",
              margin: "10px",
              padding: "10px",
              width: "200px",
              alignItems: "center",
            }}
          >
            <h3 key={post.id}>
              <div>name: {post.name}</div>
              <br />
              <div>email: {post.email}</div>
              <br />
              <div>body: {post.body}</div>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default APICards;
