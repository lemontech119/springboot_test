const createResponse = (status, body)=>({
    statusCode: status,
    body: JSON.stringify(body)
});

exports.createStory = (event, ctx, cb) =>{
    cb(null, createResponse(200, {message: 'create'}));
}