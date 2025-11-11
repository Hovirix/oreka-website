const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Oreka Finance Cloud
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Next-generation cloud financial infrastructure
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Oreka Finance Cloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
