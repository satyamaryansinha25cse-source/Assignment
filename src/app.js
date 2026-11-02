import express from "express";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";

const app = express();

// Middleware to read JSON request bodies
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Blog API server is running successfully!"
    });
});

// API routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

export default app;