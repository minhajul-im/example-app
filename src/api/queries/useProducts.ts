import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import type { QueryType } from "../utils/type";
import { useNavigate, useParams } from "react-router-dom";

export const useGetProducts = (
  type: string,
  params: Record<string, unknown> = {}
): QueryType => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get_products", type, params],
    queryFn: async () => {
      const response = await apiClient.get(`/products/${type}`, { params });
      return response.data;
    },
  });

  return { data, isLoading, error };
};

export const useGetProductsByCategory = (): QueryType => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) navigate("/");

  const { data, isLoading, error } = useQuery({
    queryKey: ["get_products_by_category", id],
    queryFn: async () => {
      const response = await apiClient.get(`/products/category/${id}`);
      return response.data;
    },
  });

  return { data, isLoading, error };
};
