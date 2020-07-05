import axios from 'axios';
import {
  SignInDto,
  SignInByFacebookDto,
  SignInByGoogleDto,
  SignInResponseDto,
  SignUpDto,
  UserInfo
} from '@app/dtos/authentication.dtos';
import { HeadersType } from '@app/dtos/request.dtos'
import servicesConfig from '@app/config/servicesConfig';

export class AuthenticationGateway {
  public static async signIn(data: SignInDto): Promise<SignInResponseDto> {
    const response = await axios.post(`${servicesConfig.authenticationUrl}/signin/login`, data);
    return response.data;
  }

  public static async signInByFacebook(data: SignInByFacebookDto): Promise<SignInResponseDto> {
    const response = await axios.post(`${servicesConfig.authenticationUrl}/signin/facebook`, data);
    return response.data;
  }

  public static async signInByGoogle(data: SignInByGoogleDto): Promise<SignInResponseDto> {
    const response = await axios.post(`${servicesConfig.authenticationUrl}/signin/google`, data);
    return response.data;
  }

  public static async signUp(data: SignUpDto): Promise<SignInResponseDto> {
    const splitedName = data.name.split(' ');
    const transformData = {
      ...data,
      firstName: splitedName[0],
      lastName: splitedName.slice(1).join(' '),
    }
    const response = await axios.post(`${servicesConfig.authenticationUrl}/signup/create`, transformData);
    return response.data;
  }

  public static async getUserInfo(id: string, headers: HeadersType): Promise<UserInfo> {
    const config = { headers: { authorization: headers?.authorization || null } };
    const response = await axios.get(`${servicesConfig.authenticationUrl}/user/${id}/info`, config);
    return response.data;
  }
}
