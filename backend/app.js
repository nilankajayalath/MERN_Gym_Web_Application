import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utills/sendEmail.js";  // Ensure this function is properly implemented

const app = express();
const router = express.Router();

config({ path: "./config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL], // Make sure FRONTEND_URL is set in your .env
    methods: ["POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST route to send the mail
router.post("/send/mail", async (req, res) => {
    const { name, email, message } = req.body;

    // Validate input fields
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: "Please provide all details",
        });
    }

    try {
        // Call your sendEmail utility function
        await sendEmail({
            email: "nilaboy754@gmail.com", // Change this to your actual receiver email
            subject: "GYM WEBSITE CONTACT",
            message,
            userEmail: email, // Sender email
        });

        // Send success response if email was sent successfully
        res.status(200).json({
            success: true,
            message: "Message Sent Successfully.",
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});

// Apply the routes to the app
app.use(router);

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        success: false,
        message: "Something went wrong!",
    });
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});
