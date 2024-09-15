import { navItems } from "../utils/constants";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="flex h-20 items-center justify-between px-9 md:px-standard">
      <div className="hidden sm:block">
        <Logo />
      </div>

      <ul className="flex space-x-6 font-roboto-flex">
        {navItems.map((item) => (
          <li key={item.title} className="flex items-center">
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>

      <Button>Zadzwoń do nas</Button>
    </nav>
  );
};

export default Header;
