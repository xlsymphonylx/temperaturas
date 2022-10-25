import "reflect-metadata";
import { DataSource } from "typeorm";
import { Temp } from "./entity/Temp";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "arquitectura.cxysal1q0lvy.us-east-2.rds.amazonaws.com",
  port: 3306,
  username: "admin",
  password: "12345678",
  database: "sys",
  synchronize: true,
  logging: false,
  entities: [Temp],
  migrations: [],
  subscribers: [],
});
