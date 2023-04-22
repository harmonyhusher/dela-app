import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import NotificationButton from "components/NotificationButton";
import { setUsers } from "../../state";
import UserImage from "components/UserImage";
import { useEffect } from "react";

const Navbar = ({ picturePath }) => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const alt = theme.palette.background.alt;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSearchDisabled, setIsSearchDisabled] = useState(true);
  const token = useSelector((state) => state.token);
  const URL = useSelector((state) => state.URL);
  const users = useSelector((state) => state.users);
  const navigte = useNavigate()

  const fullName = `${user.firstName} ${user.lastName}`;

  const handleInputChange = (event) => {
    const { value } = event.target;
    const [newFirstName, newLastName] = value.split(" ");
    setFirstName(newFirstName);
    setLastName(newLastName);
    setIsSearchDisabled(value.trim() === '');
    if (value === "") {
      dispatch(setUsers({ users: [] }));
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    let searchUrl = `${URL}/users/search?firstName=${firstName}&lastName=${lastName}`;
    let response = await fetch(searchUrl, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    let data = await response.json();

    // если данные пустые и фамилия задана, то выполняем перезапрос только с lastName
    if (data.length === 0 && lastName !== "") {
      searchUrl = `${URL}/users/search?firstName=${lastName}&lastName=`;
      response = await fetch(searchUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      data = await response.json();
    }
    dispatch(setUsers({ users: data }));
  };

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: dark,
              cursor: "pointer",
            },
          }}
        >
          ДЕЛА
        </Typography>

          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <form onSubmit={handleSearch}>
              <InputBase
                placeholder="Найти пользователя"
                onChange={handleInputChange}
                name="search"
              />
              <IconButton type="submit" onClick={handleSearch} disabled={isSearchDisabled}>
                <Search placeholder="В разработке..." />
              </IconButton>
            </form>
          </FlexBetween>
          {users?.map((user) => (
            <FlexBetween
              backgroundColor={neutralLight}
              borderRadius="9px"
              width="250px"
              height="40px"
              padding="0.1rem 1.5rem"
              key={user.id}
              sx={{"&:hover": {
                color: dark,
                cursor: "pointer",
              },}}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
                onClick={(e) => navigte(`/profile/${user._id}`)}
              >
                <UserImage image={user.picturePath}/>
                <Typography variant="h6">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography color={dark}>
                {user.location}
              </Typography>
              </Box>
            </FlexBetween>
          ))}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <NotificationButton />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={user}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                {/* <img src={user.picture}/> */}
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Выйти</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <NotificationButton sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Выйти</MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
