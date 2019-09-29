"use strict";

const fastifyPlugin = require("fastify-plugin");
const AWS = require("ibm-cos-sdk");

async function mongooseConnector(fastify, config) {
  fastify.decorate("cos", new AWS.S3(config));
}

module.exports = fastifyPlugin(mongooseConnector);
