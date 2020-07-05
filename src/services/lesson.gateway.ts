import axios from 'axios';
import {
  ContentTypeDto,
  UserPreferenceDto,
  LessonDto
} from '@app/dtos/lesson.dtos';
import { HeadersType, Query } from '@app/dtos/request.dtos'
import servicesConfig from '@app/config/servicesConfig';

export class LessonGateway {
  public static async createContentType(data: ContentTypeDto, headers: HeadersType): Promise<ContentTypeDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.post(`${servicesConfig.lessonServiceUrl}/content/types`, data, config);
    return response.data;
  }

  public static async getAllContentType(headers: HeadersType): Promise<ContentTypeDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.get(`${servicesConfig.lessonServiceUrl}/content/types`, config);
    return response.data;
  }

  public static async createUserPreference(data: UserPreferenceDto, headers: HeadersType): Promise<UserPreferenceDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.post(`${servicesConfig.lessonServiceUrl}/user/preferences`, data, config);
    return response.data;
  }

  public static async getUserPreference(headers: HeadersType): Promise<UserPreferenceDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.get(`${servicesConfig.lessonServiceUrl}/user/preferences`, config);
    return response.data;
  }

  public static async createLesson(data: LessonDto, headers: HeadersType): Promise<LessonDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.post(`${servicesConfig.lessonServiceUrl}/lesson`, data, config);
    return response.data;
  }

  public static async updateLesson(id: string, data: LessonDto, headers: HeadersType): Promise<LessonDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.put(`${servicesConfig.lessonServiceUrl}/lesson/${id}`, data, config);
    return response.data;
  }

  public static async getAllLesson(headers: HeadersType): Promise<LessonDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.get(`${servicesConfig.lessonServiceUrl}/lesson`, config);
    return response.data;
  }

  public static async getLessonsByQuery(query: Query, headers: HeadersType): Promise<LessonDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.get(`${servicesConfig.lessonServiceUrl}/lesson?q=${query.q}`, config);
    return response.data;
  }

  public static async getLessonById(id: string, headers: HeadersType): Promise<LessonDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.get(`${servicesConfig.lessonServiceUrl}/lesson/${id}`, config);
    return response.data;
  }

  public static async getLessonsByStudent(headers: HeadersType): Promise<LessonDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.get(`${servicesConfig.lessonServiceUrl}/student/lesson`, config);
    return response.data;
  }

  public static async getLessonsByTutor(headers: HeadersType): Promise<LessonDto> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.get(`${servicesConfig.lessonServiceUrl}/tutor/lesson`, config);
    return response.data;
  }
}
