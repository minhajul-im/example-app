import React from "react";
import { Helmet } from "react-helmet-async";
import { useConfig } from "@/hooks/use-config";
import { getConfig, getImageUrl } from "@/helper";

export const SeoProvider = ({ children }: { children: React.ReactNode }) => {
  const config = useConfig();
  const siteName = getConfig(config, "website_name")?.value as string;
  const title = getConfig(config, "meta_title")?.value as string;
  const description = getConfig(config, "meta_description")?.value as string;
  const keywords = getConfig(config, "meta_keywords")?.value as string;
  const siteIcon = getConfig(config, "site_icon")?.value as string;
  const metaImage = getConfig(config, "meta_image")?.value as string;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title || siteName}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href={getImageUrl(siteIcon as string)} />
        <meta property="og:image" content={getImageUrl(metaImage as string)} />
      </Helmet>
      {children}
    </React.Fragment>
  );
};
