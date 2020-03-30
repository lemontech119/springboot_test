const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();
const key = process.env.AccessID;
const secretKey = process.env.SecretKey;
const bucket = '';
const s3 = new AWS.S3({ accessKeyId: key, secretAccessKey: secretKey });

const params = {
    Bucket: bucket,
    Key: `saemi/dataset/game_17/game_17_city.csv`
}

s3.getObject(params, (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data.Body.toString());
})

// s3 문서 다운로드