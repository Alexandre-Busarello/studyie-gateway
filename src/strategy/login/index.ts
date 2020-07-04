import { LoginStrategyMethods } from '@app/strategy/login/login.methods';
import { getParamsByReq, makeRequestWithParams } from '@app/strategy/helpers';

const MAP_OF_FUNCTIONS = {
  'POST:/login/signin': {
    method: LoginStrategyMethods.signIn,
    options: {
      paramsTypes: ['BODY']
    }
  },
  'POST:/login/signup': {
    method: LoginStrategyMethods.signUp,
    options: {
      paramsTypes: ['BODY']
    }
  },
  'POST:/login/facebook/signin': {
    method: LoginStrategyMethods.signInByFacebook,
    options: {
      paramsTypes: ['BODY']
    }
  },
  'POST:/login/google/signin': {
    method: LoginStrategyMethods.signInByGoogle,
    options: {
      paramsTypes: ['BODY']
    }
  }
}

export class LoginStrategy {
  public static async execute(req: any, path: string): Promise<any> {
    const fullPath = `${req.method}:${path}`;

    const route = MAP_OF_FUNCTIONS[fullPath];
    const params = getParamsByReq(req, route.options);

    return await makeRequestWithParams(route, params);
  }
}
