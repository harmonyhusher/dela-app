import { useState, useEffect } from "react";
import { IconButton, Badge, Modal } from "@mui/material";
import { Notifications as NotificationsIcon } from "@mui/icons-material";
import WidgetWrapper from "./WidgetWrapper";

function NotificationButton() {
    const [open, setOpen] = useState(false);
    const [hasSeenNotifications, setHasSeenNotifications] = useState(
      localStorage.getItem("hasSeenNotifications") === "false"
    );
  
    useEffect(() => {
      if (hasSeenNotifications) {
        localStorage.setItem("hasSeenNotifications", "true");
      }
    }, [hasSeenNotifications]);
  
    return (
      <>
        <IconButton color="inherit" onClick={() => setOpen(true)}>
          <Badge badgeContent={hasSeenNotifications ? 0 : 1} color="error">
            <NotificationsIcon sx={{ fontSize: "25px" }} />
          </Badge>
        </IconButton>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
            setHasSeenNotifications(true);
          }}
          onOpen={() => setHasSeenNotifications(true)}
        >
            <WidgetWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%"
            }}
          >
            <p>Привет. Это мой личный Fullstack проект, который я хочу презентовать вам.</p>
            <p>Многие функции находятся ещё в разработке, но надеюсь уже существующий функционал вам понравился :)</p>
            <p>За любыми предложениями обращайтесь в тг @harmonyhusher</p>
          </div>
          </WidgetWrapper>
        </Modal>
      </>
    );
  }
export default NotificationButton;
