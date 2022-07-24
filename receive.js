var amqp = require('amqplib/callback_api');
const send = require('./send.js');
const languages = require('./languages.js')
console.log(languages.checkLanguage('Albanian_language'))


// Citation for the following function: 
// Date: 07.22.2022
// Copied from: 
// https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html
amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'get_language';

        channel.assertQueue(queue, {
            durable: false
        });

        channel.prefetch(1);
        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function reply(msg) {
            console.log(" [x] Received %s", msg.content.toString());
            if (languages.checkLanguage(msg.content.toString()))
            {
                send.send(msg.content.toString())
            } 
            else {
                send.send("non-existent")
            }
            channel.ack(msg);
        });
        
    });
});