import { AxiosResponse } from "axios";
import { api } from "../api";
import { IUser } from "../../interfaces/entities/User.interface";

type SignIn = {
  email: string;
  password: string;
};

type SignInSuccess = {
  token: string;
  user: IUser;
};

export type SignInError = {
  msg: "Invalid credentials. " | "User does not exist. ";
};

type SignUp = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

async function signIn(params: SignIn): Promise<AxiosResponse<SignInSuccess>> {
  try {
    const response = await api.post("/auth/login", params);
    return response.data; // Возвращаем успешный ответ
  } catch (error: any) {
    const errorResponse = error.response.data as SignInError;
    throw errorResponse.msg;
  }
}

async function signUp(params: SignUp) {
  return api.post("/register", params).catch((e) => {
    throw e.response.data;
  });
}

export { signIn, signUp };
