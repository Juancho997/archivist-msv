import * as dotenv from 'dotenv' 
dotenv.config();

import Kafka, { KafkaConsumer } from 'node-rdkafka';

enum security_protocol {
    plaintext = "plaintext", 
    ssl = "ssl",
    sasl_plaintext = "sasl_plaintext",
    sasl_ssl = "sasl_ssl"
  }


const kafkaConf = {
    "group.id": process.env.KAFKA_GROUP_ID,
    "metadata.broker.list": process.env.KAFKA_BROKERS_LIST,
    "socket.keepalive.enable": true,
    "security.protocol" : security_protocol.sasl_ssl,
    "sasl.mechanisms": process.env.KAFKA_SECURITY_MECHANISM,
    "sasl.username": process.env.KAFKA_USERNAME,
    "sasl.password": process.env.KAFKA_PASSWORD,
    "debug": "generic,broker,security"
};

export const topics = [process.env.KAFKA_TOPICS_LIST];
export const consumer = new KafkaConsumer(kafkaConf, {
    "auto.offset.reset": "beginning"
});