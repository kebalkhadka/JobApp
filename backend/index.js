import express from 'express'
import cors from "cors"
import dotenv from "dotenv"
import connectDB from './utils/db.js'
import userRoute from './routes/user.route.js'
import cookieParser from 'cookie-parser'
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.route.js'
import applicationRoute  from './routes/application.route.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser())

let port = process.env.PORT || 3000;

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) {
            return callback(null, true); // Allow non-browser requests like Postman
        }
        callback(null, origin); // Allow any origin dynamically
    },
    methods: "GET,PUT,POST,DELETE,OPTIONS",
    credentials: true, // ✅ Allow credentials (cookies, authorization headers)
    allowedHeaders: "Content-Type, Authorization",
};
app.use(cors(corsOptions));

// API routes
app.use('/api/user', userRoute);
app.use('/api/company',companyRoute)
app.use('/api/jobs',jobRoute)
app.use('/api/application',applicationRoute)

// Start server only after DB is connected
const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(` Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error(" Database connection failed:", error);
        process.exit(1);
    }
};

startServer();
