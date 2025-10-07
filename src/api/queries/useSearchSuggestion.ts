import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import type { QueryType } from "../utils/type";

export const useSearchSuggestion = (): QueryType => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get_search_suggestion"],
    queryFn: async () => {
      const response = await apiClient.get("/get-search-suggestions");
      return response.data;
    },
  });

  return { data, isLoading, error };
};
