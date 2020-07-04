import { LoginStrategy } from '@app/strategy/login';
import { StudentStrategy } from '@app/strategy/student';
import { TutorStrategy } from '@app/strategy/tutor';
import { DataStrategy } from '@app/strategy/data';

const MAP_OF_STRATEGYS = {
  'login': LoginStrategy,
  'student': StudentStrategy,
  'tutor': TutorStrategy,
  'data': DataStrategy
}

export class Dispatcher {
  public static async executeStrategy(req: any, path: string): Promise<any> {
    const paths = req.url.split('/');
    const strategy = MAP_OF_STRATEGYS[paths[1]];

    return await strategy.execute(req, path);
  }
}
