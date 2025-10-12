import { Footer } from "./footer";
import { Header } from "./header/header";

interface Props {
  children: React.ReactNode;
  isContainer?: boolean;
}
export const BaseLayout = ({ children, isContainer = true }: Props) => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      <section
        className={`${isContainer ? "container md:mx-auto flex-1" : ""}`}>
        {children}
      </section>

      <footer>
        <Footer />
        <div className="md:hidden mb-0 fixed bottom-0 left-0 z-50 w-full">
          <div className="sticky w-full bg-red-500">Mobile Menu</div>
        </div>
      </footer>
    </main>
  );
};
