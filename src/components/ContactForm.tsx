import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/hooks/useLanguage";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xyzlylak");

  const { t } = useLanguage();

  if (state.succeeded) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-primary-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">{t("contact.successTitle")}</h3>
          <p className="text-muted-foreground">{t("contact.successText")}</p>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="max-w-2xl mx-auto border-border/50">
      <CardHeader>
        <CardTitle className="text-2xl">{t("contact.formTitle")}</CardTitle>
        <CardDescription>{t("contact.formDescription")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">{t("contact.labels.name")}</Label>
            <Input
              id="name"
              name="name"
              placeholder={t("contact.placeholders.name")}
              required
              className="transition-all duration-300 focus:border-primary"
            />
            <ValidationError prefix={t("contact.labels.name")} field="name" errors={state.errors} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t("contact.labels.email")}</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder={t("contact.placeholders.email")}
              required
              className="transition-all duration-300 focus:border-primary"
            />
            <ValidationError prefix={t("contact.labels.email")} field="email" errors={state.errors} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">{t("contact.labels.company")}</Label>
            <Input
              id="company"
              name="company"
              placeholder={t("contact.placeholders.company")}
              className="transition-all duration-300 focus:border-primary"
            />
            <ValidationError prefix={t("contact.labels.company")} field="company" errors={state.errors} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t("contact.labels.message")}</Label>
            <Textarea
              id="message"
              name="message"
              placeholder={t("contact.placeholders.message")}
              rows={5}
              required
              className="transition-all duration-300 focus:border-primary resize-none"
            />
            <ValidationError prefix={t("contact.labels.message")} field="message" errors={state.errors} />
          </div>

          <Button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
          >
            {state.submitting ? t("contact.sending") : t("contact.send")}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
