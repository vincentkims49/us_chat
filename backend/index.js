const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const axios = require("axios");

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "171f8972-5b24-4e2c-ab69-876e5e15c521" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
