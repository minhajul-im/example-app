import { HomePage } from "./home";
import { Routes, Route } from "react-router";
import { ContactPage } from "./contact";
import { SignInPage } from "./auth/signin";
import { SignUpPage } from "./auth/signup";
import { CategoriesPage } from "./categories";
import { NotFoundPage } from "./notfound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/categories/:id/:name" element={<CategoriesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
