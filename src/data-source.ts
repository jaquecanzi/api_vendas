import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const PORT = process.env.DB_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: ["./src/shared/typeorm/migrations/*"],
});
