import axios from 'axios';
import {
  SignInDto,
  SignInByFacebookDto,
  SignInByGoogleDto,
  SignInResponseDto,
  SignUpDto
} from '@app/dtos/authentication.dtos';
import servicesConfig from '@app/config/servicesConfig';

export class AuthenticationFacade {
  public static async signIn(data: SignInDto, destinationUrl: string): Promise<SignInResponseDto> {
    const response = await axios.post(`${servicesConfig.authenticationUrl}${destinationUrl}`, data);
    return response.data;
  }

  public static async signInByFacebook(data: SignInByFacebookDto, destinationUrl: string): Promise<SignInResponseDto> {
    const response = await axios.post(`${servicesConfig.authenticationUrl}${destinationUrl}`, data);
    return response.data;
  }

  public static async signInByGoogle(data: SignInByGoogleDto, destinationUrl: string): Promise<SignInResponseDto> {
    const response = await axios.post(`${servicesConfig.authenticationUrl}${destinationUrl}`, data);
    return response.data;
  }

  public static async signUp(data: SignUpDto, destinationUrl: string): Promise<SignInResponseDto> {
    const splitedName = data.name.split(' ');
    const transformData = {
      ...data,
      firstName: splitedName[0],
      lastName: splitedName.slice(1).join(' '),
    }
    const response = await axios.post(`${servicesConfig.authenticationUrl}${destinationUrl}`, transformData);
    return response.data;
  }
}
