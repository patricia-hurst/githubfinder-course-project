const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="h-16 text-center bg-teal-600 text-slate-200 dark:border-transparent dark:bg-neutral py-6">
      <p className="font-bold">
        Copyright &copy; {footerYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
