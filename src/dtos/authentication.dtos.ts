export interface SignInDto {
  email: string;
  password: string;
}

export interface SignInByFacebookDto {
  accessToken: string;
}

export interface SignInByGoogleDto {
  externalId: string;
  email: string;
  firstName: string;
  lastName: string;
  pictureUrl: string;
}

export interface SignInResponseDto {
  user: {
    name: string,
    pictureUrl: string,
  };
  token: string;
}

export interface SignUpDto {
  name: string;
  email: string;
  password: string;
}

export interface UserInfo {
  id: number;
  externalId: string;
  firstName: string;
  lastName: string;
  email: string;
  pictureUrl: string;
  isSocialLogin: boolean;
}
