import { Sequelize } from "sequelize";

export const Conn = new Sequelize(process.env.DB_SCHEMA || 'db_df_inlira',
process.env.DB_USER || 'postgres',
process.env.DB_PASSWORD || '',
{
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT!) || 5432,
    dialect: 'postgres'
});
