import { TutorStrategyMethods } from '@app/strategy/tutor/tutor.methods';
import { getParamsByReq, makeRequestWithParams } from '@app/strategy/helpers';

const MAP_OF_FUNCTIONS = {
  'POST:/tutor/lesson': {
    method: TutorStrategyMethods.createLesson,
    options: {
      paramsTypes: ['BODY']
    }
  },
  'PUT:/tutor/lesson/:id': {
    method: TutorStrategyMethods.updateLesson,
    options: {
      paramsTypes: ['PARAMS', 'BODY']
    }
  },
  'GET:/tutor/lesson/:id': {
    method: TutorStrategyMethods.getLessonDetails,
    options: {
      paramsTypes: ['PARAMS']
    }
  },
  'GET:/tutor/lesson': {
    method: TutorStrategyMethods.getTutorLessons
  },
  'GET:/tutor/:id/info': {
    method: TutorStrategyMethods.getTutorInfo,
    options: {
      paramsTypes: ['PARAMS']
    }
  }
}

export class TutorStrategy {
  public static async execute(req: any, path: string): Promise<any> {
    const fullPath = `${req.method}:${path}`;

    const route = MAP_OF_FUNCTIONS[fullPath];
    const params = getParamsByReq(req, route.options);

    return await makeRequestWithParams(route, params, req.headers);
  }
}
