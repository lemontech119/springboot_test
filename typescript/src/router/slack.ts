import express, { Request, Response, NextFunction } from "express";
import Slack from "slack-node";

const router = express.Router();
const slackWebhookUrl = 'https://hooks.slack.com/services/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';

router.get("/", async (req: Request, res: Response, next: NextFunction) =>{
    const slack = new Slack();
    slack.setWebhook(slackWebhookUrl);
    slack.webhook({
        channel: "#general",
        username: "saemi",
        text: "test"
    }, function(err, response){
        if(!err){
            console.log(response);
            res.send("test 성공");
        }else{
            res.send(err);
        }
    })
})

export = router;