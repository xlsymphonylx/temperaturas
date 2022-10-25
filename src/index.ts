import { AppDataSource } from "./data-source";
import router from "./routes";
import * as express from "express";
import * as cors from "cors";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const port = 8082;

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
    app.listen(port, () => console.log("listening port " + port));
  })
  .catch((error) => console.log(error));
