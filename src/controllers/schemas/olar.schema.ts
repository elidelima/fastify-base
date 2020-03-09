export const OlarSchema = {
  description: 'Olar method. Just an example.',
  consumes: ['application/json'],
  querystring: {
    type: 'object',
    required: ['name'],
    properties: {
      name: {
        type: 'string',
        description: 'Name for the event.',
        example: 'Eli'
      },
    }
  },
  response: {
    200: {
      description: 'Successful response',
      type: 'object',
      properties: {
        message: { type: 'string' }
      },
      displayRequestDuration: ['true']
    },
    400: {
      description: 'Error on server',
      type: 'object',
      properties: {
        error: {type: 'string'},        // the http error message
      }
    },
    500: {
      description: 'Error on server',
      type: 'object',
      properties: {
        error: {type: 'string'},        // the http error message
      }
    }
  }
}

