import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t("footer.title")}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">{t("footer.subtitle")}</p>
          <p className="text-xs text-muted-foreground">{t("footer.copyright", { year })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
