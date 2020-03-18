import express, { Application } from 'express';
import { Controller } from './main.controller';
import { MONGO_URL } from './constants/pokeApi.constants';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

class App{
    public app: Application;

    public pokeController: Controller;

    constructor(){
        this.app = express();
        this.setConfig();
        this.setMongoConfig();

        this.pokeController = new Controller(this.app);
    }

    private setConfig(){
        this.app.use(bodyParser.json({ limit: '50mb '}));

        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

        this.app.use(cors());
    }

    private setMongoConfig(){
        mongoose.Promise = global.Promise;
        mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, error =>{
            if(error){
                console.log(`mongodb connection error ${error}`);
            }else{
                console.log(`mongodb connection`);
            }

        })
    }
}

export default new App().app;