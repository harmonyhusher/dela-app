'use client';

import React from 'react';

import { useUnit } from 'effector-react';
import { useRouter } from 'next/navigation';

import { urls } from '../lib/urls';
import { $isAuth } from '../model';
export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [isAuth] = useUnit([$isAuth]);
  const router = useRouter();

  React.useEffect(() => {
    if (!isAuth) {
      router.replace(urls.auth);
    }
  }, [isAuth]);

  return <>{children}</>;
};
