import multer from "multer";

// Use memory storage for file handling
const storage = multer.memoryStorage();

// Create a middleware to handle single file uploads
export const singleUpload = multer({ storage }).single("file");
