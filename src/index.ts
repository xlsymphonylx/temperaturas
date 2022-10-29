import { AppDataSource } from "./data-source";
import router from "./routes";
import * as express from "express";
import * as cors from "cors";
import * as dotenv from "dotenv";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    dotenv.config();
    const port = process.env.PORT;

    app.use(express.json());
    app.use(
      cors({
        origin: "*",
      })
    );
    app.use(router);

    console.log(
      "Here you can setup and run express / fastify / any other framework."
    );
    app.listen(80, '0.0.0.0');
  })
  .catch((error) => console.log(error));
