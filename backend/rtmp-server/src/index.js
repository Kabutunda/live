const { NodeMediaServer } = require('node-media-server');
require("dotenv").config();
const config = {
  rtmp: {
    port: process.env.PORT || 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30,
  },
  http: {
    port: process.env.PORT || 8000,
    allow_origin: '*',
  },
};

const nms = new NodeMediaServer(config);
nms.run();
