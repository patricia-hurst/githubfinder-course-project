const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="text-center bg-neutral py-6">
      <p className="font-bold">
        Copyright &copy; {footerYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
