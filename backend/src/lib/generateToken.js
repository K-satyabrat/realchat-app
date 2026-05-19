import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });
    const isProduction = process.env.NODE_ENV === "production";
    
    res.cookie("jwt", token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: isProduction ? "none" : "strict",
      secure: isProduction,
    });
    return token;
  } catch (error) {
    console.log("Error generating token:", error);
  }
};

export default generateTokenAndSetCookie;
