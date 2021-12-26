const { NodeMediaServer } = require('node-media-server');

const path = require('path');

const dotenv = require('dotenv');

dotenv.config();

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

//heroku setup
if (process.env.NODE_ENV==='production') {
  app.use(express.static('../../.../frontend/client-server/build'));
  app.get("*", (req, res) =>{
    res.sendFile(path.resolve(__dirname, '...','...','frontend','client-server', 'build', 'index.html'));
  })
}
