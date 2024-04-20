import { useUnit } from "effector-react";
import React from "react";
import { $isAuth } from "../model";
import { useRouter } from "next/router";
import { urls } from "../lib/urls";
export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuth] = useUnit([$isAuth]);
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuth) {
      router.replace(urls.login);
    }
  }, []);

  return <>{isAuth && children}</>;
};
