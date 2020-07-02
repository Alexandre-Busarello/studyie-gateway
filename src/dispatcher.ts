import { AuthenticationService } from '@app/services/authentication';

const MAP_OF_SERVICES = {
  'authentication': AuthenticationService,
}

export class Dispatcher {
  public static async makeRequest(req): Promise<any> {
    const paths = req.url.split('/');
    const service = MAP_OF_SERVICES[paths[1]];

    return await service.makeRequest(req);
  }
}
