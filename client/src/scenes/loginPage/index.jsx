import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          ДЕЛА
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Box
          width={isNonMobileScreens ? "50%" : "93%"}
          p="2rem"
          m="2rem auto"
          borderRadius="1rem"
          backgroundColor={theme.palette.background.alt}
        >
          <Typography
            fontWeight="500"
            variant="h5"
            sx={{ mb: "1.5rem" }}
            display="flex"
            justifyContent="center"
          >
            Добро пожаловать в ДЕЛА!
          </Typography>
          <Form />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
