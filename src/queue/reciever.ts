import amqplib from "amqplib/callback_api"

amqplib.connect('amqplib://localhost' , function(err0 , connection){
    if(err0){
        throw err0;
    }

    connection.createChannel(function(err1 , channel){
        if(err1){
            throw err1;
        }

        const queue = 'zapQue'

        channel.assertQueue(queue , {
            durable : true
        })

        channel.consume(queue , function(msg){
            channel.ack(msg!)
            console.log("rcved from queue" , msg?.content.toString())
        })
    })
})