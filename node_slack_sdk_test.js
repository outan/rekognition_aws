var IncomingWebhook = require('@slack/client').IncomingWebhook;
// 設定を.envからロード
require('dotenv').config();

var url = process.env.SLACK_WEBHOOK_URL || ''; //see section above on sensitive data

var webhook = new IncomingWebhook(url);
var message = "Hello, wangdan"
webhook.send(message, function(err, res) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Message sent: ', res);
    }
});

var WebClient = require('@slack/client').WebClient;

var token = process.env.SLACK_API_TOKEN || ''; //see section above on sensitive data

var web = new WebClient(token);
web.chat.postMessage('bot_test', 'from webClient,hello', function(err, res) {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Message sent: ', res);
    }
});
