import { createContext, useContext } from "react";

export interface ConfigType {
  type: string;
  value: string | { type: string; value: string }[];
}

export const ConfigContext = createContext<ConfigType[] | null>(null);

export const useConfig = () => {
  const context = useContext(ConfigContext);
  if (context === null) {
    throw new Error("server config not found");
  }
  return context;
};
