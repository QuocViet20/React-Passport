const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const passportgSetup = require("./passport");
const authRouter = require("./routes/auth");
const cors = require("cors");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: true,
    methods: "GET,POST,PUT,DELETE",
  })
);
app.use("/auth", authRouter);

app.listen("5000", () => {
  console.log("server is running");
});
