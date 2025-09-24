import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Presente } from './entity/Presente';
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: true,
  logging: false,
  entities: [Presente],
});

