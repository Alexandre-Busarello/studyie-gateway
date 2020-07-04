import { LessonGateway } from '@app/services/lesson.gateway';
import { Params } from '@app/dtos/request.dtos'
import {
  UserPreferenceDto,
  LessonDto
} from '@app/dtos/lesson.dtos';
import { HeadersType } from '@app/dtos/request.dtos'

export class StudentStrategyMethods {
  public static async getStudentLessons(headers: HeadersType): Promise<LessonDto> {
    return await LessonGateway.getLessonsByStudent(headers);
  }

  public static async getLessonDetails(params: Params, headers: HeadersType): Promise<LessonDto> {
    return await LessonGateway.getLessonById(params?.id, headers);
  }

  public static async configurateStudentPreference(data: UserPreferenceDto, headers: HeadersType): Promise<UserPreferenceDto> {
    return await LessonGateway.createUserPreference(data, headers);
  }

  public static async getStudentPreference(headers: HeadersType): Promise<UserPreferenceDto> {
    return await LessonGateway.getUserPreference(headers);
  }
}
