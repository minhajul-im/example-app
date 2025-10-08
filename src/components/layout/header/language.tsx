import { getConfig } from "@/helper";
import { useConfig } from "@/hooks/use-config";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const config = useConfig();

  const isShowLanguageSwitcher = getConfig(
    config,
    "show_language_switcher"
  )?.value;

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return isShowLanguageSwitcher ? (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-full md:w-24">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="bn">বাংলা</SelectItem>
      </SelectContent>
    </Select>
  ) : null;
};
