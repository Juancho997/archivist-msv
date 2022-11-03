import { topics, consumer } from '../config';
import { createArchive } from './graphql-requests';

consumer.on("ready", function (args) {
    try {
        console.log(`KafkaConsumer ready`);
        consumer.subscribe(topics);
        consumer.consume();
        console.log(`Consuming topic : ${topics[0]}`);
    } catch (error) {
        console.log(`There was an error trying to consume topic ${topics[0]} : ${error}`)
    }
});

consumer.on("data", async function (m) {
    try {

        console.log(`>>> New message from topic : ${topics} <<< `)
        const event = JSON.parse(m.value.toString());
        if (event === 'Cloud Karafka Producer initialized'){
            console.log(event)
        } else {
            createArchive(event).catch((error) => console.error("error creating archive : ", error));
        }


    } catch (error) {
        console.log(`There was an error receiving the message : ${error}`);
    }
});

consumer.on('event.error', function (err) {
    console.error(err);
    process.exit(1);
});

consumer.on("disconnected", function (arg) {
    console.log(`Consumer ${arg} disconnected`);
    process.exit();
});

const consumerInit = (function () {
    try {
        consumer.connect();
        console.log(`KafkaConsumer connected`);
    } catch (error) {
        console.log(`There was an error trying to connect : ${error}`);
    }
})();

export default consumerInit;