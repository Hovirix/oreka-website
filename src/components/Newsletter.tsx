import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [state, handleSubmit] = useForm("xyzlylak");

  if (state.succeeded) {
    return (
      <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
        <CardContent className="pt-6 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-2">You're all set!</h3>
          <p className="text-muted-foreground">
            Thanks for subscribing. We'll keep you updated on our launch.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-muted-foreground">
            Be the first to know when we launch. No spam, just valuable updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 transition-all duration-300 focus:border-primary"
            />
            <Button
              type="submit"
              disabled={state.submitting}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity sm:w-auto"
            >
              {state.submitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </form>
      </CardContent>
    </Card>
  );
};

export default Newsletter;
