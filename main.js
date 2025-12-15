const express = require("express");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());

const BOT_ID = "BOT_ID";  // NO TOUCH

// Helper function to send a message
async function sendMessage(text) {
  await fetch("https://api.groupme.com/v3/bots/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      bot_id: BOT_ID,
      text: text
    })
  });
}
app.post("/", async (req, res) => {{
function getMessage(){

  const message = req.body.text;
    if (req.body.sender_type === "bot") {
      // the sendStatus(200) means it doesn't reply
    return res.sendStatus(200);
  }
  return message
}

function getName(){
   return req.body.name
}

function getUserID(){
  //this never changes
  return req.body.userID
}


  //start writing the code here

}


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Bot running on port " + PORT));
