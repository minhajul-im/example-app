import { useGetConfig } from "@/api/queries/useGetConfig";
import { AnimationLoading } from "@/components/common/animation-loading";
import { ConfigContext, type ConfigType } from "@/hooks/use-config";
import { useNavigate } from "react-router-dom";

export const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetConfig();

  if (error) navigate("/error");

  if (isLoading) {
    return (
      <main className="flex items-center justify-center h-screen w-full">
        <AnimationLoading />
      </main>
    );
  }

  const config = data?.data as ConfigType[];

  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
