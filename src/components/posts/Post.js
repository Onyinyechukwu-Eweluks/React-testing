import React, { useEffect, useState } from "react";
import AddNewPost from "./AddNewPost";
const postURL = "https://jsonplaceholder.typicode.com/posts";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [postFormVisible, setPostFormVisible] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  const postData = async () => {
    try {
      const posts = await fetch(postURL);
      const res = await posts.json();
      const data = res.slice(0, 9);
      //   console.log(data);
      setPosts(data);
    } catch (error) {
      console.log("message: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(newPost);
    fetch(postURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        setPostFormVisible(false); //onsubmit remove form
        setNewPost({ title: "", body: "" }); //onsubmit clear form values
        setPosts([...posts, data]); // onsubmit add the value to the list displayed
      });
  };

  const handleClick = () => {
    setPostFormVisible(false);
    setNewPost({ title: "", body: "" });
  };

  useEffect(() => {
    postData();
  }, []);

  const { title, body } = newPost;
  return (
    <div>
      {!postFormVisible && (
        <AddNewPost onclick={() => setPostFormVisible(true)} />
      )}
      {postFormVisible && (
        <form onSubmit={handleSubmit}>
          <h3>New Post</h3>
          <input
            type="text"
            name="title"
            defaultValue={title}
            placeholder="Title"
            onChange={handleChange}
          />{" "}
          <br />
          <textarea
            name="body"
            defaultValue={body}
            onChange={handleChange}
            placeholder="body"
            cols="30"
            rows="3"
          ></textarea>
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClick}>
            Close
          </button>
        </form>
      )}
      <h2>Post</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
