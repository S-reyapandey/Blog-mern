import express from 'express';
import mongoose from 'mongoose';
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authroute.js";

import 'dotenv/config';

const DB = process.env.DBURI.replace("<PASSWORD>", process.env.DBPASSWORD);

mongoose
  .connect(DB, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("DB connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
