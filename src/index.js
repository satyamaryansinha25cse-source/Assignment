import dotenv from "dotenv";

dotenv.config();

import connectDB from "./config/database.js";
import app from "./app.js";

const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 4000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.log("Server startup failed:", error.message);
    }
};

startServer();