var amqp = require('amqplib/callback_api');
const randModule = require('./index.js');

function send (language) {
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        
        if (language === "non-existent"){
            var queue = 'send_overview';
            var msg = "There is currently no Wikipedia page for this language."
            channel.assertQueue(queue, {
                durable: false
            });

            channel.sendToQueue(queue, Buffer.from(msg));
    
            console.log(" [x] Sent %s", msg);
        }
        else{
            randModule.fetchOverview(language).then((res) => {
                var queue = 'send_overview';
                console.log(language)
                var msg = res
                
                channel.assertQueue(queue, {
                    durable: false
                });
                channel.sendToQueue(queue, Buffer.from(msg));
        
                console.log(" [x] Sent %s", msg);
            })
        }

    });
});
}

module.exports = {send}