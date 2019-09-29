# Fastify IBM COS Plugin using the IBM COS SDK

[![NPM](https://nodei.co/npm/fastify-ibm-cos.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/fastify-ibm-cos/)

[![CircleCI](https://circleci.com/gh/alex-ppg/fastify-ibm-cos.svg?style=svg)](https://circleci.com/gh/alex-ppg/fastify-ibm-cos)

## Installation

```bash
npm i fastify-ibm-cos -s
```

## Usage

```javascript
// ...Other Plugins
fastify.register(
  require("fastify-ibm-cos"),
  {
    endpoint: "s3.eu.cloud-object-storage.appdomain.cloud",
    apiKeyId: "api_key_id",
    credentials: {
      accessKeyId: "access_key_id",
      secretAccessKey: "secret_access_key"
    },
    ibmAuthEndpoint: "https://iam.cloud.ibm.com/identity/token",
    serviceInstanceId: "service_instance_id"
  },
  err => {
    if (err) throw err;
  }
);

fastify.get("/", (request, reply) => {
  console.log(fastify.cos); // IBM COS instance here
});
```

## Options

The options are passed as-is to the underlying ibm-cos-sdk instance and as such one [should consult the corresponding docs](https://ibm.github.io/ibm-cos-sdk-js/AWS/S3.html#constructor-property) for what variables he/she should pass.

## Author

[Alex Papageorgiou](alex.ppg@pm.me)

## License

Licensed under [GPLv3](./LICENSE).
