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
