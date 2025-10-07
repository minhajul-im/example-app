import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import type { QueryType } from "../utils/type";

export const useGetCategories = (): QueryType => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get_categories"],
    queryFn: async () => {
      const response = await apiClient.get("/categories");
      return response.data;
    },
  });

  return { data, isLoading, error };
};
