import { Helmet } from "react-helmet-async";

export const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-3xl font-bold underline">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <img src={"/vite.svg"} alt="logo" />

      <div className="w-4/5 mx-auto">
        <LanguageSwitcher />
        <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
      </div>
    </div>
  );
};

import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        className="px-2 py-1 bg-gray-200 rounded"
        onClick={() => i18n.changeLanguage("en")}>
        English
      </button>
      <button
        className="px-2 py-1 bg-gray-200 rounded"
        onClick={() => i18n.changeLanguage("bn")}>
        Bengali
      </button>
    </div>
  );
}
