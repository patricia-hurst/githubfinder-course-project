const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <p className="h-16 flex items-center justify-center fixed bottom-0 w-full bg-teal-600 text-slate-200 dark:border-transparent dark:bg-neutral">
      Copyright &copy; P. Hurst {footerYear} All rights reserved.
    </p>
  );
};

export default Footer;
