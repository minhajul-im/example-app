import { IMAGE_URL } from "@/constant";
import type { ConfigType } from "@/hooks/use-config";

export const getImageUrl = (url: string) => {
  return `${IMAGE_URL}${url}`;
};

export const slugify = (text: string): string => {
  const isBangla = (text: string): boolean => {
    const banglaRegex = /[\u0980-\u09FF]/;
    return banglaRegex.test(text);
  };

  const cleanText = text.replace(/['".,!?;:()[\]{}]/g, "").trim();

  const words = cleanText.split(/\s+/).filter((word) => word.length > 0);

  if (isBangla(cleanText)) return words.join("-");

  return words.map((word) => word.toLowerCase()).join("-");
};

export const slugifyToTitle = (slug: string): string => {
  const isBangla = (text: string): boolean => {
    const banglaRegex = /[\u0980-\u09FF]/;
    return banglaRegex.test(text);
  };

  const words = slug.split("-").filter((word) => word.length > 0);

  if (words.length === 0) return "";

  if (isBangla(slug)) {
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

export const getConfig = (config: ConfigType[] = [], key: string) => {
  if (!config || !key) return null;

  const result = config?.find((item) => item.type === key);
  return result;
};
