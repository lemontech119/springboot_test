import express, {Request, Response, NextFunction} from 'express';
import slack from "./router/slack";


const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction)=>{
    res.send("hello world");
})
app.use("/slack", slack);

app.listen(3000, async ()=>{
    console.log("start");
})