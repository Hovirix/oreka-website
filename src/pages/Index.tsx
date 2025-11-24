import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";

const Index = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background">
      <div className="w-full">
        <div className="hidden sm:flex justify-end px-6 pt-4">
          <LanguageSwitcher />
        </div>
        <div className="sm:hidden px-4 pt-4">
          <LanguageSwitcher />
        </div>
      </div>
      <Hero />
      <Features />
      
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("contact.heading")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subheading")}</p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <Newsletter />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;
