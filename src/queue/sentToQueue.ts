import amqplib from "amqplib/callback_api"
import ZapRunOutBox from "../db/models/zapRunOutbox";


amqplib.connect('amqp://localhost' , function (err0 , connection){
    if(err0){
        throw err0;
    }
    connection.createChannel(function(err1 , channel){
        if(err1){
            throw err1;
        }

        const queue = 'zapQue'
        const msg = 'hello there'

        channel.assertQueue(queue , {
            durable : true
        })
        channel.sendToQueue(queue , Buffer.from(msg))
    })
})