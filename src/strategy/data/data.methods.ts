import { LessonGateway } from '@app/services/lesson.gateway';
import { Params } from '@app/dtos/request.dtos'
import {
  ContentTypeDto
} from '@app/dtos/lesson.dtos';
import { HeadersType } from '@app/dtos/request.dtos'

export class DataStrategyMethods {
  public static async createContentType(data: ContentTypeDto, headers: HeadersType): Promise<ContentTypeDto> {
    return await LessonGateway.createContentType(data, headers);
  }

  public static async getAllContentTypes(headers: HeadersType): Promise<ContentTypeDto> {
    return await LessonGateway.getAllContentType(headers);
  }
}
