"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const slack_node_1 = __importDefault(require("slack-node"));
const router = express_1.default.Router();
const slackWebhookUrl = 'https://hooks.slack.com/services/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';
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const slack = new slack_node_1.default();
    slack.setWebhook(slackWebhookUrl);
    slack.webhook({
        channel: "#general",
        username: "saemi",
        text: "test"
    }, function (err, response) {
        if (!err) {
            console.log(response);
            res.send("test 성공");
        }
        else {
            res.send(err);
        }
    });
}));
module.exports = router;
