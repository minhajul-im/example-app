import { ActionSearchBar } from "./search";

export const HeaderMobile = () => {
  return (
    <nav className="md:hidden z-50 bg-background sticky top-0 py-2">
      <div className="mx-2 flex flex-1 justify-center items-center">
        <ActionSearchBar />
      </div>
    </nav>
  );
};
