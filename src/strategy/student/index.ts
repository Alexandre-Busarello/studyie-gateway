import { StudentStrategyMethods } from '@app/strategy/student/student.methods';
import { getParamsByReq, makeRequestWithParams } from '@app/strategy/helpers';

const MAP_OF_FUNCTIONS = {
  'POST:/student/preferences': {
    method: StudentStrategyMethods.configurateStudentPreference,
    options: {
      paramsTypes: ['BODY']
    }
  },
  'GET:/student/preferences': {
    method: StudentStrategyMethods.getStudentPreference
  },
  'GET:/student/lesson': {
    method: StudentStrategyMethods.getStudentLessons,
    options: {
      paramsTypes: ['QUERY']
    }
  },
  'GET:/student/lesson/:id': {
    method: StudentStrategyMethods.getLessonDetails,
    options: {
      paramsTypes: ['PARAMS']
    }
  },
}

export class StudentStrategy {
  public static async execute(req: any, path: string): Promise<any> {
    const fullPath = `${req.method}:${path}`;

    const route = MAP_OF_FUNCTIONS[fullPath];
    const params = getParamsByReq(req, route.options);

    return await makeRequestWithParams(route, params, req.headers);
  }
}
