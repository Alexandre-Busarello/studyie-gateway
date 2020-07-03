import axios from 'axios';
import { AuthenticationFacade } from '@app/services/authentication/authentication.facade';
import { getParamsByReq } from '@app/services/helpers';

const MAP_OF_FUNCTIONS = {
  '/signin': {
    method: AuthenticationFacade.signIn,
    destinationUrl: '/signin/login',
    options: {
      httpMethod: 'POST',
      paramsTypes: ['BODY']
    }
  },
  '/signup': {
    method: AuthenticationFacade.signUp,
    destinationUrl: '/signup/create',
    options: {
      httpMethod: 'POST',
      paramsTypes: ['BODY']
    }
  },
  '/facebook/signin': {
    method: AuthenticationFacade.signInByFacebook,
    destinationUrl: '/signin/facebook',
    options: {
      httpMethod: 'POST',
      paramsTypes: ['BODY']
    }
  },
  '/google/signin': {
    method: AuthenticationFacade.signInByGoogle,
    destinationUrl: '/signin/google',
    options: {
      httpMethod: 'POST',
      paramsTypes: ['BODY']
    }
  }
}

export class AuthenticationService {
  public static async makeRequest(req: any): Promise<any> {
    const paths = req.url.split('/');
    const path = `/${paths.slice(2).join('/')}`;

    const route = MAP_OF_FUNCTIONS[path];
    const params = getParamsByReq(req, route.options);

    if (params.body && params.params) {
      return await route.method(params.params, params.body, route.destinationUrl);
    }
    if (params.body) {
      return await route.method(params.body, route.destinationUrl);
    }
    if (params.query && params.params) {
      return await route.method(params.params, params.query, route.destinationUrl);
    }
    if (params.query) {
      return await route.method(params.query, route.destinationUrl);
    }
  }
}
