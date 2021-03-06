import { AuthenticationGateway } from '@app/services/authentication.gateway';
import {
  SignInDto,
  SignInByFacebookDto,
  SignInByGoogleDto,
  SignInResponseDto,
  SignUpDto
} from '@app/dtos/authentication.dtos';

export class LoginStrategyMethods {
  public static async signIn(data: SignInDto): Promise<SignInResponseDto> {
    return await AuthenticationGateway.signIn(data);
  }

  public static async signInByFacebook(data: SignInByFacebookDto): Promise<SignInResponseDto> {
    return await AuthenticationGateway.signInByFacebook(data);
  }

  public static async signInByGoogle(data: SignInByGoogleDto): Promise<SignInResponseDto> {
    return await AuthenticationGateway.signInByGoogle(data);
  }

  public static async signUp(data: SignUpDto): Promise<SignInResponseDto> {
    const splitedName = data.name.split(' ');
    const transformedData = {
      ...data,
      firstName: splitedName[0],
      lastName: splitedName?.length === 1 ? '' : splitedName.slice(1).join(' '),
    }
    return await AuthenticationGateway.signUp(transformedData);
  }
}
