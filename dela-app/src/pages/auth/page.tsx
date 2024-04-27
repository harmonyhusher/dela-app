import { Form } from '@src/processes/form';

import { createRoute } from 'atomic-router';
export const authRoute = createRoute();

export const Auth = () => {
  return <Form />;
};
