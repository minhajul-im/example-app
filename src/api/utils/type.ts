export interface MutationType {
  mutate: (data: unknown) => void;
  isPending: boolean;
}

export interface QueryType {
  data: {
    data?: unknown;
  };
  error: unknown;
  isLoading: boolean;
}

export interface WithoutDataMutationType {
  mutate: () => void;
  isPending: boolean;
}
