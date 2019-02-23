'use strict';

module.exports = {
  services: [{
    appName: 'sofarpc',
    api: {
      ProtoService: {
        interfaceName: 'com.nodejs.rpc.ProtoService',
        method: {
          echoObj: {
            responseTimeout: 3000,
          },
        },
      },
    },
  }],
};
