import express, { Application } from 'express';
import cors from 'cors';

import loginRoutes from '@app/routes/login.routes';
import studentRoutes from '@app/routes/student.routes';
import tutorRoutes from '@app/routes/tutor.routes';
import dataRoutes from '@app/routes/data.routes';

class WebServer {
  server: Application;

  constructor() {
    this.server = express();
  }

  registerRoutes() {
    this.server.use(loginRoutes);
    this.server.use(studentRoutes);
    this.server.use(tutorRoutes);
    this.server.use(dataRoutes);
  }

  setup() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));

    this.registerRoutes();

    return this;
  }

  listen() {
    const port = process.env.PORT || '3000';
    this.server.listen(port, () => console.info(`Server ready and listening on port ${port}`));

    return this;
  }
}

export default new WebServer();
