import { Routes, Route } from "react-router";
import { HomePage } from "./home";
import { ContactPage } from "./contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
