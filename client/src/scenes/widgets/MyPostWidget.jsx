import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  MicOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "../../components/UserImage";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state";
import AudioRecorder from "./AudioRecording";
import {useMediaQuery} from "@mui/material";
import { useEffect } from "react";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;
  const [recording, setRecording] = useState(false);

  const handlePost = async () => {
    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }

    const response = await fetch(`http://localhost:3001/posts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });
    const posts = await response.json();
    dispatch(setPosts({ posts }));
    setImage(null);
    setPost("");
  };


  const handleSetRecording = (e) => {
    setRecording(!recording);
  };

  const phrases = [
    "Как ваши дела?",
    "Что нового?",
    "Вы сегодня покушали?",
    "Вы не устали на работе?",
    "У вас есть домашний питомец?",
    "Скучаете по близкому человеку?",
    "Любите морские закаты?",
    "Дела хорошо, а на личном как?",
    "Что вы думаете об этой погоде?",
    "Как прошел ваш день?",
    "Какие планы на выходные?",
    "Какой ваш любимый вид спорта?",
    "Как вы относитесь к путешествиям?",
    "Что вы любите делать в свободное время?",
    "Какой ваш любимый фильм?",
    "Как вы относитесь к технологиям?",
    "Как вы проводите свой отпуск?",
    "Какой ваш любимый вид музыки?",
    "Что вы думаете об этой новости?",
    "Как вы относитесь к литературе?",
  ];

  const randomIndex = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomIndex];

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        <UserImage image={picturePath} />
        <InputBase
          placeholder={randomPhrase}
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>
      {!isImage && (
        <Box
          borderRadius="5px"
          border={`1px solid ${medium}`}
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png,.mp4"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Перенсите картинку сюда</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <>
          <FlexBetween gap="0.25rem">
            <AttachFileOutlined sx={{ color: mediumMain }} />
            <Button onClick={() => setIsImage(!isImage)}>
              <Typography color={mediumMain}>Файл</Typography>
            </Button>
          </FlexBetween>

          <FlexBetween gap="0.25rem">
            <MicOutlined sx={{ color: mediumMain }} />
            {recording && <AudioRecorder />}
            <Button>
              <Typography color={mediumMain} onClick={handleSetRecording}>
                Голосовое
              </Typography>
            </Button>
          </FlexBetween>
        </>

        <Button
          disabled={!post}
          onClick={handlePost}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
          }}
        >
          Пост
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
