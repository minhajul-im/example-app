import { useMutation } from "@tanstack/react-query";
import { apiErrorHandler } from "../utils/error";
import { apiClient } from "@/lib/api-client";
import type { MutationType } from "../utils/type";
import { revalidateQueryFn } from "@/lib/query-client";

export const useAddToCartMutation = (): MutationType => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["add_to_cart"],
    mutationFn: async (data: unknown) => {
      const response = await apiClient.post("/carts/add", data);
      return response.data;
    },
    onSuccess: (res) => {
      if (res) {
        revalidateQueryFn("get_cart");
      }
    },
    onError: (error) => {
      return apiErrorHandler(error);
    },
  });

  return { mutate, isPending };
};

export const useRemoveCartMutation = (): MutationType => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["remove_cart"],
    mutationFn: async (data: unknown) => {
      const response = await apiClient.delete(
        `/carts/${(data as { id: number | string })?.id}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      if (res) {
        revalidateQueryFn("get_cart");
      }
    },
    onError: (error) => {
      return apiErrorHandler(error);
    },
  });

  return { mutate, isPending };
};

export const useUpdateCartMutation = (): MutationType => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["update_cart"],
    mutationFn: async (data: unknown) => {
      const response = await apiClient.post("/carts/change-quantity", data);
      return response.data;
    },
    onSuccess: (res) => {
      if (res) {
        revalidateQueryFn("get_cart");
      }
    },
    onError: (error) => {
      return apiErrorHandler(error);
    },
  });

  return { mutate, isPending };
};
