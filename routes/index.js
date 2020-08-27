var express = require('express');
var router = express.Router();
var model = require('../models/model')

/* GET home page. */
router.get('/', function (req, res, next) {
    model.get(function (messages) {
      console.log(messages.messages[1])
      console.log(messages.messages[1].author.name)
      console.log(messages.messages[1].author.avatarUrl)
      // message multiple

      console.log(messages.messages[1].attachments[0].url)
      console.log(messages.messages[1].attachments[0].fileName)
        res.render('index', {title: 'Express', messages: messages.messages});
    })
});

module.exports = router;
