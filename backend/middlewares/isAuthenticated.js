import jwt from 'jsonwebtoken';

const isAuthenticated = (req, res, next) => {
  try {
    // Extract token from cookies 
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false
      });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (!decoded) {
      return res.status(401).json({
        message: 'Invalid token',
        success: false
      });
    }

    // Attach userId to request
    req.id = decoded.userId;

    // Move to the next middleware or route handler
    next();
  } catch (e) {
    console.error("Authentication error:", e);
    return res.status(401).json({
      message: "Authentication failed",
      success: false
    });
  }
};

export default isAuthenticated;
