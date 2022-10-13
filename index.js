const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");

dotenv.config();
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log("DB Connection Successful!");
	})
	.catch((err) => console.log(err));

app.get("/api/test", () => {
	console.log("test is successful");
});
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
	console.log("Backend server is running");
});
