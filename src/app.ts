import { bootstrap } from 'fastify-decorators';
import fastify from 'fastify';
import { join } from 'path';
import AutoLoad from 'fastify-autoload';
import oas from 'fastify-oas';

// Create Fastify instance
const instance = fastify({logger: true});

// This loads all plugins defined in plugins
instance.register(AutoLoad, {
  dir: join(__dirname, 'plugins'),
  options: Object.assign({}, {}),
  includeTypeScript: true
})

// Register handlers auto-bootstrap
instance.register(bootstrap, {
  directory: join(__dirname, 'controllers'),
  mask: /\.controller\./
});


try {
  instance.listen(3003).catch(err => console.log(err));
} catch(error) {
  console.log(error)
}