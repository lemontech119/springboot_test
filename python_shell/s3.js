const AWS = require('aws-sdk');
const dotenv = require('dotenv');
dotenv.config();
const key = process.env.AccessID;
const secretKey = process.env.SecretKey;
const bucket = '';
const s3 = new AWS.S3({ accessKeyId: key, secretAccessKey: secretKey });

// s3 문서 다운로드
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

// 리스트 조회 Prefix로 특정 디렉토리만 조회 가능
const param = {
    Bucket: 'haii-server-dev-serverlessdeploymentbucket-3bg9ru2dt3oy',
    Prefix: 'saemi/dataset/game_18/'
}

var data = '';
(async () => {
    try {
        const file = await s3.listObjects(param).promise();
        console.log(file)

    } catch (err) {
        console.log(err);
    }
})();