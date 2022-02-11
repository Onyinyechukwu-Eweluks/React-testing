import React from "react";

const AddNewPost = ({ onclick }) => {
  return <button onClick={() => onclick()}>Add New Post</button>;
};

export default AddNewPost;
