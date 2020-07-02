import express, { Application } from 'express';
import cors from 'cors';

import authenticationRoutes from '@app/routes/authentication.routes';

class WebServer {
  server: Application;

  constructor() {
    this.server = express();
  }

  setup() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(authenticationRoutes);

    return this;
  }

  listen() {
    const port = process.env.PORT || '3000';
    this.server.listen(port, () => console.info(`Server ready and listening on port ${port}`));

    return this;
  }
}

export default new WebServer();
