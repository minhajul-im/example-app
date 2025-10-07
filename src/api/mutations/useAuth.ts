import { useMutation } from "@tanstack/react-query";
import { apiErrorHandler } from "../utils/error";
import { apiClient } from "@/lib/api-client";
import { toast } from "react-hot-toast";
import type { MutationType } from "../utils/type";

export const useSignInMutation = (): MutationType => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["auth_signin"],
    mutationFn: async (data: unknown) => {
      const response = await apiClient.post("auth/signin", data);
      return response.data;
    },
    onSuccess: (res) => {
      if (res?.status) {
        toast.success("Sign in successful");
      }
    },
    onError: (error) => {
      return apiErrorHandler(error);
    },
  });

  return { mutate, isPending };
};
export const useSignUpMutation = (): MutationType => {
  const { mutate, isPending } = useMutation({
    mutationKey: ["auth_signup"],
    mutationFn: async (data: unknown) => {
      const response = await apiClient.post("auth/signup", data);
      return response.data;
    },
    onSuccess: (res) => {
      if (res?.status) {
        toast.success("Sign up successful");
      }
    },
    onError: (error) => {
      return apiErrorHandler(error);
    },
  });

  return { mutate, isPending };
};
