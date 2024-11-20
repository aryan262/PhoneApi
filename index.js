import express from 'express'
import countriesData from './countries.json' assert { type: 'json' };
import cors from 'cors';
const app = express();
app.use(cors('*'))
const port = 5000;
app.get("/", (req, res) => {
  res.json(countriesData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
