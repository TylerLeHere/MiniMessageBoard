const express = require('express');
const router = express.Router();

// Memory datastore for messages
const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() }
];

// Get "/" show all messages
router.get('/', (req, res) =>{
    res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// POST "/new" - receive form data, save it, redirect
router. post("/new", (req, res) => {
  const { message, user } = req.body; // Extract message and user from the form data
  messages.push({ text: message, user: user, added: new Date() }); // Add new message to the datastore
  res.redirect("/"); // Redirect back to the homepage to show the updated message list
});

// GET "/message/:id" - show a single message
router.get("/message/:id", (req, res) => {
  const message = messages[req.params.id];
  res.render("message", { title: "Message", message: message });
});

module.exports = router; // Export the router to be used in app.js