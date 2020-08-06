// 고정출현,입력후 터미널에서 설치
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

// 내가 만든 파일 require은 이 아래에다가 넣자.
const users = require("./routes/users");

const app = express();
app.use(express.json());
app.use("/api/v1/users", users);

const PORT = process.env.PORT || 5777;
app.listen(PORT, console.log("서버가동"));
