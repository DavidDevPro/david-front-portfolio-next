export const FooterLinks = () => {
  return (
    <div className="text-xs font-poppins text-center mt-2 flex items-center justify-center gap-2">
      <a href="/login" className="text-background hover:opacity-90">Admin</a>
      <span className="text-accent">|</span>
      <a href="/mentions" className="text-background hover:opacity-90">Mentions légales</a>
      <span className="text-accent">|</span>
      <a href="/rgpd" className="text-background hover:opacity-90">RGPD</a>
    </div>
  );
};