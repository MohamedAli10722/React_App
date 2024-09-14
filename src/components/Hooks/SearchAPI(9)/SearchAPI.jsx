import axios from "axios";
import React, { useEffect, useState } from "react";

function SearchAPI() {
  const [id, setId] = useState("");
  const [post, setPost] = useState({});
  const [buttonId, setButtonId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => setPost(response.data))
      .catch((error) => console.log(error));
  }, [buttonId]);

  return (
    <div>
      <label>Enter Post ID:</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => setButtonId(id)}>Search</button>
      <div>
        <h1>
          Button Search <br /> {post.name} <br /> {post.email}
        </h1>
      </div>
    </div>
  );
}

export default SearchAPI;
