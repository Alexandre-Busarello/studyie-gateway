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
    return await AuthenticationGateway.signUp(data);
  }
}
