import { createQuery } from "@farfetched/core";
import { api } from "@src/shared/api";
import { IUser } from "@src/shared/interfaces/entities/User.interface";

export const userQuery = createQuery({
  handler: async ({ id }: { id: number }) => {
    const response = await api.get<IUser>(`/users/${id}`);

    return response.data;
  },
});
