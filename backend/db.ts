import dotenv from "dotenv"
import express from "express"

dotenv.config({ path: '../.env' })

const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
});

module.exports = {
    query: (text: any, params: any) => pool.query(text, params)
};