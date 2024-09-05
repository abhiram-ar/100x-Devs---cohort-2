const express = require("express");
const app = express();

app.use(express.json());

let user = [
  {
    name: "John Doe",
    kidneys: [
      {
        healthly: true,
      },
      {
        healthly: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  let numberOfKidnesys = user[0].kidneys.length;
  let healthyKidneys = user[0].kidneys.filter(
    (kidney) => kidney.healthly === true
  ).length;
  let unhealthyKidneys = numberOfKidnesys - healthyKidneys;
  res.json({
    name: user[0].name,
    numberOfKidnesys,
    healthyKidneys,
    unhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  let kidney = req.body.isHealthy;
  user[0].kidneys.push({ healthly: kidney });

  console.log(user[0].kidneys);
  res.json({
    message: "Kidney added",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < user[0].kidneys.length; i++) {
    user[0].kidneys[i].healthly = true;
  }
  res.json({
    message: "All kidneys are healthy",
  });
});

app.delete("/", (req, res) => {
    if(user[0].kidneys.filter((kidney) => kidney.healthly === false).length === 0){
        res.status(400).json({
            message: "All kidneys are healthy"
        })
    }

  user[0].kidneys = user[0].kidneys.filter(
    (kidney) => kidney.healthly === true
  );
  res.json({
    message: "All unhealthy kidneys removed",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
