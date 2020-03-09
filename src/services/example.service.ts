import { Service, Inject, FastifyInstanceToken } from 'fastify-decorators';
import { FastifyInstance } from 'fastify';

@Service()
export class ExampleService {

  @Inject(FastifyInstanceToken)
  private instance!: FastifyInstance;

  async showMessage(message: string): Promise<string> {
    return `Olar show this: ${message}`;
  }
}