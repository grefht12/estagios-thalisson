
export interface User {
  nome?: string;
  email: string;
  senha: string;
  isEmpresa?: boolean;
}

export interface AuthOptions {
  isSignIn: boolean;
  user: User;
}
