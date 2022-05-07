import ThemeWrapper from '../../context/theme/ThemeWrapper';

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <ThemeWrapper>
      <footer className="h-16 text-center dark:border-transparent py-6">
        <p className="font-bold">
          Copyright &copy; {footerYear} All rights reserved.
        </p>
      </footer>
    </ThemeWrapper>
  );
};

export default Footer;
