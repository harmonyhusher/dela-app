import { Box } from "@mui/material";

const UserCommentImage = ({ image, size = "45px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="avtr"
        src={`http://localhost:3001/assets/${image}`}
      />
    </Box>
  );
};

export default UserCommentImage;