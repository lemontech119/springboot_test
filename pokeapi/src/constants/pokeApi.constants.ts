import dotenv from 'dotenv';
dotenv.config();

export const PORT = 9001;
export const WELCOME_MESSAGE = "Welcome to pokeAPI REST by bono ";
export const MONGO_URL = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0-nnnsh.gcp.mongodb.net/test?retryWrites=true&w=majority`;