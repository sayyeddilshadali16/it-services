import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-container padding-container relative z-30 py-5">
      <Link to="/">
        <h1 className="text-2xl font-bold tracking-tighter">
          Percept Infosystem
        </h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="https://camptraveler.com/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <img
        src="https://camptraveler.com/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
