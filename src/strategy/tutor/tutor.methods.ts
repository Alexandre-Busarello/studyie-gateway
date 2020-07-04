import { LessonGateway } from '@app/services/lesson.gateway';
import { Params } from '@app/dtos/request.dtos'
import {
  LessonDto
} from '@app/dtos/lesson.dtos';
import { HeadersType } from '@app/dtos/request.dtos'

export class TutorStrategyMethods {
  public static async createLesson(data: LessonDto, headers: HeadersType): Promise<LessonDto> {
    return await LessonGateway.createLesson(data, headers);
  }

  public static async updateLesson(params: Params, data: LessonDto, headers: HeadersType): Promise<LessonDto> {
    return await LessonGateway.updateLesson(params?.id, data, headers);
  }

  public static async getTutorLessons(headers: HeadersType): Promise<LessonDto> {
    return await LessonGateway.getLessonByUser(headers);
  }

  public static async getLessonDetails(params: Params, headers: HeadersType): Promise<LessonDto> {
    return await LessonGateway.getLessonById(params?.id, headers);
  }
}
