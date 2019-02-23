'use strict';

exports.rpc = {
  registry: {
    type: 'nacos',
    address: '127.0.0.1:8848',
  },
  // client: {},
  server: {
    namespace: 'com.nodejs.rpc',
    version: '1.0',
    group: 'SOFA',
  },
};
