const client=require("twilio")('ACa9b5a30ff2f862cc435c8f78cad8a7f9','b9f12199c12a713cbe185ea56500684d');
const sendmessage=function(req,res){
  console.log(req.body);
  const mobile="+91"+req.body.mobile;
  const message=req.body.message;
  console.log(mobile);
  client.messages.create({
   body: message,
   to: mobile,
   from: '+15312081943'
}).then(function(message){
  console.log(message);
})
.catch(error => console.log(error))
  res.end("message sent");
}

module.exports={sendmessage};
