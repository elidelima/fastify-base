'use strict'

import oas from 'fastify-oas'
import { FastifyInstance, ServerOptions } from 'fastify';
import { nextCallback } from 'fastify-plugin';

module.exports = async (fastify: FastifyInstance, opts: ServerOptions, next: nextCallback) => {
  fastify.log.info('CONFIGURING SWAGGER');

  fastify.register(oas, {
    routePrefix: '/documentation',
    swagger: {
      info: {
        title: 'Fastify - base project',
        description: 'Base project - using fastify',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      consumes: ['application/json'],
      produces: ['application/json'],
      servers: [{
        url: 'http://localhost:3003/',
        description: 'DEV',
      }],
    },
    exposeRoute: true
  });

  next();

}