const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Message = mongoose.model("Message", messageSchema);

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "..")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "TAZ.html"));
});

app.post("/contact", async (req, res) => {

    const { name, email, message } = req.body;

    const newMessage = new Message({
        name,
        email,
        message
    });

    await newMessage.save();

    console.log("Saved to MongoDB");

    res.json({ message: "Message saved successfully 🚀" });

});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});