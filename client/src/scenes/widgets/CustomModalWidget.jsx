import React from "react";
import { Backdrop, Modal } from "@mui/material";
import WidgetWrapper from "../../components/WidgetWrapper";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import UserImage from "../../components/UserImage";
import { useSelector } from "react-redux";

const CustomModalWidget = ({
  open,
  onClose,
  initialValues,
  token,
  image,
  userId
}) => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(userId)

  const URL = useSelector((state) => state.URL)

  const updateUser = async () => {
    try {
        const response = await fetch(
            `${URL}/users/${userId}/update`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            }
          );
      const updatedUser = await response.json();
      console.log(updatedUser);
      onClose(); // close the modal after successful update
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <form>
        <Modal
          open={open}
          onClose={onClose}
          BackdropComponent={Backdrop}
        >
           <WidgetWrapper>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: 24,
              p: 4,
              border: "1px solid white",
              borderRadius: "0.75rem"
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>Настройки</h2>
              <UserImage image={image} />
              <TextField
                label="Имя"
                name="firstName"
                value={values.firstName}
                onChange={handleInputChange}
                sx={{ m: 2 }}
              />
              <TextField
                label="Фамилия"
                name="lastName"
                value={values.lastName}
                onChange={handleInputChange}
                sx={{ m: 2 }}
              />
              <TextField
                label="Местоположение"
                name="location"
                value={values.location}
                onChange={handleInputChange}
                sx={{ m: 2 }}
              />
              <Button onClick={updateUser}>Применить</Button>
              <Button onClick={onClose}>Закрыть</Button>
            </Box>
          </Box>
          </WidgetWrapper>
        </Modal>
      </form>
  );
};

export default CustomModalWidget;
