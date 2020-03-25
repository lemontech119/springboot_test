const mongoose = require('mongoose');
const Story = require('./models/story');

let connection = null;

const connect = () =>{
  // 연결되어 있으면 기존것을 연결
  if(connection && mongoose.connection.readyState === 1) return Promise.resolve(connection);
  // 없으면 새로 연결 
  return mongoose.connect('mongodb+srv://test:test@cluster0-nnnsh.gcp.mongodb.net/test?retryWrites=true&w=majority').then(
      conn =>{
          connection = conn;
          return connection;
      }
  )
}

const createResponse = (status, body)=>({
    statusCode: status,
    body: JSON.stringify(body)
});

exports.createStory = (event, ctx, cb) =>{
    ctx.callbackWaitsForEmptyEventLoop = false;
    const { title, body } = JSON.parse(event.body);
    connect().then(
        ()=> {
            const story = new Story({ title, body });
            return story.save();
        }
    ).then(
        story =>{
            cb(null, createResponse(200, story));
        }
    ).
    catch(
        (e) =>{
            cb(null, createResponse(500, {error: e }));
        }
    )
}

exports.readStories = (event, ctx, cb) => {
    ctx.callbackWaitsForEmptyEventLoop = false;
    connect().then(
        () => Story.find().sort({ _id: -1 }).limit(20).lean().exec()
    ).then(
        stories => cb(null, createResponse(200, stories))
    ).catch(
        (e) =>{
            cb(null, createResponse(500, {error: e}))
        }
    );
}

exports.readStory = (event, ctx, cb) =>{
    ctx.callbackWaitsForEmptyEventLoop = false;
    connect().then(
        () => Story.findById(event.pathParameters.id).exec()
    ).then(
        story =>{
            if(!story){
                return cb(null, { statusCode: 404 });
            }
            cb(null, createResponse(200, story));
        }
    )
    
}

exports.updateStory = (event, ctx, cb) =>{
    ctx.callbackWaitsForEmptyEventLoop = false;
    const update = JSON.parse(event.body);
    connect().then(
        () => Story.findOneAndUpdate({ _id: event.pathParameters.id }, update, { new: true }).exec()
    ).then(
        story => {
            if(!story){
                return cb(null, { statusCode: 404 })
            }
            cb(null, createResponse(200, story ))
        }
    )
}

exports.deleteStory = (event, ctx, cb) =>{
    ctx.callbackWaitsForEmptyEventLoop = false;
    connect().then(
        () => Story.remove({ _id: event.pathParameters.id }).exec()
    ).then(
        () => cb(null, createResponse(204, null))
    )
}