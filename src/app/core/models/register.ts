export interface UserRegistrationRequest {
  userType: string;
  mobNumber: number;
  email: string;
  password: string;
  confirmPassword: string;
  address?: string;
}

export interface ambulanceType {
  name: string;
  code: string;
}
