import jwt from "jsonwebtoken";

export const verifyTokenAndExtractUser = async (req, res, next) => {
  let token = req.header("Authorization");

  if (!token) {
    return res.status(403).send("Access Denied");
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length).trimLeft();
  }

  const verified = jwt.verify(token, process.env.JWT_SECRET);
  req.user = verified;

  if (!token) {
    return res.status(401).json({ message: "Отсутствует токен авторизации" });
  }

  next();
};
