import express from "express";
import cors from "cors";
const port = 5000;
import bodyParser from "body-parser";

const app = express();

const data = [
  {
    userDetails: {
      name: "Md Intezar Alam",
      email: "useremail@gmail.com",
      password: "userpassword",
    },
    userAddress: {
      home: "CDC Boys Hostel HNK",
      city: "Warangal",
      pinCode: 506001,
    },
    qualification: {
      btech: {
        branch: "CSE",
        passingYear: 2023,
        grade: "O (Topper)",
      },
      dov: "17-02-2002",
    },
  },
];

app.use(cors());
app.get("/", (req, res) => {
  res.send(data);
});
console.log(data);

app.listen(port, () => {
  console.log(`server listining on ${port}`);
});
