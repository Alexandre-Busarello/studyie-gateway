export interface ContentTypeDto {
  name: string;
}

export interface UserPreferenceDto {
  preferenceName: string;
  priority: number;
}

export interface LessonDto {
  name: string;
  thumbUrl: string;
  videoUrl: string;
  description: string;
  contentsType: Array<ContentTypeDto>;
}
