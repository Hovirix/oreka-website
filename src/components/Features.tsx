import { Shield, Zap, Cloud, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const defaultFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance standards to keep your financial data safe and secure.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time processing and instant insights powered by cutting-edge cloud infrastructure.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Built for the cloud from the ground up, ensuring scalability and reliability at every level.",
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Advanced financial analytics and reporting tools to drive data-informed decisions.",
  },
];

const Features = () => {
  const { get, t } = useLanguage();
  const translated = get("features.items");
  const items = (translated ?? defaultFeatures).map((it: any, i: number) => ({
    ...defaultFeatures[i % defaultFeatures.length],
    ...it,
  }));
  const heading = t("features.heading");
  const subheading = t("features.subheading");

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subheading}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
          {items.map((feature: any, index: number) => (
            <Card 
              key={feature.title}
              className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  {feature.icon ? (() => {
                    const Icon = feature.icon;
                    return <Icon className="w-6 h-6 text-primary-foreground" />;
                  })() : null}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
