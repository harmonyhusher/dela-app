import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPost } from "../state";

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState("");
  const loggedInUserId = useSelector((state) => state.user._id);
  const firstName = useSelector((state) => state.user.firstName);
  const picturePath = useSelector((state) => state.user.picturePath);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://localhost:3001/posts/${postId}/comment`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: loggedInUserId,
          text: comment,
          firstName: firstName,
          picturePath: picturePath,
        }),
      }
    );
    
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
    setComment("");
    console.log(comment, loggedInUserId, firstName, picturePath);
  };

  return (
    <form onSubmit={handleCommentSubmit}>
      <TextField
        placeholder="Add a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
      ></TextField>
      <Button type="submit">Post</Button>
    </form>
  );
};

export default CommentForm;
