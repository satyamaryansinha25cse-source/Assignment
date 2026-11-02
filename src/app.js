import express from "express";

const app = express();

app.use(express.json());

// Health check route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Blog API server is running successfully!"
    });
});

export default app;