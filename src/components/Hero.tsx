import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("hero.support")}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            onClick={scrollToBottom}
          >
            {t("hero.ctaPrimary")}
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
            onClick={scrollToBottom}
          >
            {t("hero.ctaSecondary")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
