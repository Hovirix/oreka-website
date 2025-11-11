import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="relative max-w-5xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Oreka Finance Cloud
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Next-generation cloud financial infrastructure for modern businesses
        </p>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Streamline your financial operations with secure, scalable, and intelligent cloud solutions designed for the future of B2B finance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            onClick={scrollToBottom}
          >
            Get Early Access
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5"
            onClick={scrollToBottom}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
