import { getConfig } from "@/helper";
import { useConfig } from "@/hooks/useConfig";

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
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-muted-foreground">{copyright}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {policies?.map((item, index) => (
            <span key={item.name} className="flex items-center gap-4">
              <a
                href={item.href}
                className="hover:text-primary/70 transition-colors">
                {item.name}
              </a>
              {index < policies.length - 1 && (
                <span className="text-gray-600">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
