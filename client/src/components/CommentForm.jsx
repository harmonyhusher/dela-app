import { Button, TextField, IconButton, InputBase, Box, Typography, Divider } from "@mui/material";
import { Send } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPost } from "../state";
import {useTheme} from "@mui/material";

const CommentForm = ({ postId }) => {
  const [comment, setComment] = useState("");
  const [charCount, setCharCount] = useState(0);
  const loggedInUserId = useSelector((state) => state.user._id);
  const firstName = useSelector((state) => state.user.firstName);
  const picturePath = useSelector((state) => state.user.picturePath);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const URL = useSelector((state) => state.URL);
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (comment.length > 90) {
      alert("Комментарий не может превышать 90 символов");
      return;
    }
    const response = await fetch(`${URL}/posts/${postId}/comment`, {
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
    });

    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
    setComment("");
    console.log(comment, loggedInUserId, firstName, picturePath);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    setCharCount(event.target.value.length);
  };

  const handleCommentKeyDown = (event) => {
    if (event.keyCode === 8 && comment.length > 0) {
      setCharCount(charCount - 1);
    }
  };

  return (
    <>
    <Divider sx={{p: "0.2rem"}}/>
    <form onSubmit={handleCommentSubmit}>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        border: "1px solid main",
        borderRadius: "4px",
        padding: "8px",
      }}
    >
      <InputBase
        placeholder="Оставьте комментарий"
        value={comment}
        onChange={handleCommentChange}
        onKeyDown={handleCommentKeyDown}
        sx={{
          flexGrow: 1,
          marginRight: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      />
      <IconButton type="submit" sx={{color: "main"}}>
        <Send color={main}/>
      </IconButton>
      <Box sx={{ marginLeft: "16px", color: "main" }}>
        <Typography variant="caption">{charCount}/90</Typography>
      </Box>
    </Box>
  </form>
  </>
  );
};

export default CommentForm;
