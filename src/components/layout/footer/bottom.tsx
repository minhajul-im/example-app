import { getConfig } from "@/helper";
import { useConfig } from "@/hooks/useConfig";
import { Link } from "react-router-dom";

export const BottomBar = () => {
  const config = useConfig();

  const copyright =
    (getConfig(config, "frontend_copyright_text")?.value as string) ||
    `© ${new Date().getFullYear()} All rights reserved.`;

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Accessibility", href: "#" },
  ];

  return (
    <div className="flex flex-col-reverse mt-4 md:flex-row items-center md:py-4  justify-between gap-4 text-sm">
      <p className="text-muted-foreground">{copyright}</p>
      <div className="flex flex-wrap justify-center gap-4">
        {policies?.map((item, index) => (
          <span key={item.name} className="flex items-center gap-4">
            <Link
              to={item.href}
              className="hover:text-primary/70 transition-colors">
              {item.name}
            </Link>
            {index < policies.length - 1 && (
              <span className="text-muted-foreground">|</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};
