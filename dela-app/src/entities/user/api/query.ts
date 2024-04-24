import { createQuery } from "@farfetched/core";
import { api } from "@src/shared/api";
import { IUser } from "@src/shared/interfaces/entities/User.interface";

export const $userData = createQuery({
  handler: async () => {
    const response = await api.get<IUser>(`/user`);

    return response.data;
  },
});
