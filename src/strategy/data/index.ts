import { DataStrategyMethods } from '@app/strategy/data/data.methods';
import { getParamsByReq, makeRequestWithParams } from '@app/strategy/helpers';

const MAP_OF_FUNCTIONS = {
  'POST:/data/content/types': {
    method: DataStrategyMethods.createContentType,
    options: {
      paramsTypes: ['BODY']
    }
  },
  'GET:/data/content/types': {
    method: DataStrategyMethods.getAllContentTypes
  }
}

export class DataStrategy {
  public static async execute(req: any, path: string): Promise<any> {
    const fullPath = `${req.method}:${path}`;

    const route = MAP_OF_FUNCTIONS[fullPath];
    const params = getParamsByReq(req, route.options);

    return await makeRequestWithParams(route, params, req.headers);
  }
}
