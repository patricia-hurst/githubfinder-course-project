const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="text-center border-t-2 border-slate-200 bg-teal-600 text-slate-200 dark:border-transparent dark:bg-neutral dark:text-neutral-content py-6">
      <p className="font-bold">
        Copyright &copy; {footerYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
