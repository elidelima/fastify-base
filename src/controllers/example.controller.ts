import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { Controller, FastifyInstanceToken, GET, Inject } from 'fastify-decorators';
import { ExampleService } from '../services/example.service';
import { OlarSchema } from './schemas/olar.schema';
import { Server } from 'http';

@Controller({route: ''})
export default class ExampleController {
  @Inject(FastifyInstanceToken)
  private instance!: FastifyInstance;

  @Inject(ExampleService)
  private service!: ExampleService;

  @GET({url: '/olar', options: { schema: OlarSchema}})
  async olar(req: FastifyRequest, reply: FastifyReply<Server>) {
    return { message: await this.service.showMessage(req.query.name) };
  }

  @GET({url: '/bye'})
  async bye() {
    return 'Bue Mundor!';
  }
}

