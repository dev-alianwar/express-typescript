
import express from 'express';

const app = express();
const port = 4000;




function getHealth(req:express.Request, res:express.Response) 
{
  return res.status(200).send("Server is running...");
}

app.get('/', getHealth);

app.listen(port, () => {
  console.log(`Express server is running on port ${port}.`);
});

