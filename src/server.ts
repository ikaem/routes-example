import { envVars } from '../config/helpers/envVars.js';
import { app } from './app.js';

const port = envVars.PORT;

const start = async () => {
  app.listen(port, () => console.log(`Server listening on port ${port}`));
};

start();
