import { AxiosResponse } from "axios";
import { api } from "../api";
import { IUser } from "../../interfaces/entities/User.interface";

type SignIn = {
  email: string;
  password: string;
};

type SignInError = {
  msg: "Invalid credentials. ";
};

type SignUp = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

async function signIn(
  params: SignIn
): Promise<AxiosResponse<IUser, SignInError>> {
  return api.post("/auth/login", params).catch((e) => {
    throw (e.response.data as SignInError).msg;
  });
}

async function signUp(params: SignUp) {
  return api.post("/register", params).catch((e) => {
    throw e.response.data;
  });
}

export { signIn, signUp };
