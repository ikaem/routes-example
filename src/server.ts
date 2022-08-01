import { app } from "./app.js";


const start = async () => {
  if (!process.env.PORT) throw new Error('PORT IS NOT SPECIFIED');

  const port = process.env.PORT;

  app.listen(port, () => console.log(`Server listening on port ${port}`));
};


start();