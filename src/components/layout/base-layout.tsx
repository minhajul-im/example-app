import { Footer } from "./footer";
import { Header } from "./header";
import { ActionSearchBar } from "./header/search";
import { MegaMenu } from "./header/mega-menu";
import { useConfig } from "@/hooks/use-config";
import { getConfig } from "@/helper";

interface Props {
  children: React.ReactNode;
  isContainer?: boolean;
}
export const BaseLayout = ({ children, isContainer = true }: Props) => {
  const config = useConfig();

  const isSticky = getConfig(config, "header_stikcy")?.value;
  return (
    <main className="flex flex-col min-h-screen">
      <div className={`${isSticky ? "sticky top-0 z-50" : ""}`}>
        <Header />
        <div className="md:hidden z-50 bg-background sticky top-0 py-2">
          <div className="mx-2 flex flex-1 justify-center items-center">
            <ActionSearchBar />
          </div>
        </div>

        <div className="hidden md:block">
          <MegaMenu />
        </div>
      </div>

      <section className={`${isContainer ? "container mx-auto flex-1" : ""}`}>
        {children}
      </section>
      <Footer />
    </main>
  );
};
