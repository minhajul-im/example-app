import { Footer } from "./footer";
import { Header } from "./header";
import { SearchSection } from "./search";
import { MegaMenu } from "./mega-menu";

interface Props {
  children: React.ReactNode;
  isContainer?: boolean;
}
export const BaseLayout = ({ children, isContainer = true }: Props) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="md:hidden z-50 bg-background sticky top-0 py-2">
        <div className="mx-2 flex flex-1 justify-center items-center">
          <SearchSection />
        </div>
      </div>

      <div className="hidden md:block">
        <MegaMenu />
      </div>

      <section className={`${isContainer ? "container mx-auto flex-1" : ""}`}>
        {children}
      </section>
      <Footer />
    </main>
  );
};
