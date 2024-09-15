import { footerSection } from "../utils/constants";

const Footer = () => {
  return (
    <footer className="flex h-20 flex-col items-center justify-between space-y-2 border-t border-t-white bg-secondary px-standard py-4 font-roboto-condensed text-white sm:flex-row sm:space-y-0 sm:py-0">
      <p className="font-bold">{footerSection.leftText}</p>
      <a href="#" className="underline">
        {footerSection.rightText}
      </a>
    </footer>
  );
};

export default Footer;
