import React, { useEffect, useState } from "react";
import { Link as NLink } from "react-scroll";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    });
  }, [navActive]);

  const _toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };
  return (
    <nav id="navbar" className={`${navActive ? "active" : ""}`}>
      <div className="container">
        <div className="logo-wrapper" style={{ cursor: "pointer" }}>
          <Link href="/">
            <Image src="/assets/logo.png" alt="logo" width={80} height={80} />
          </Link>
        </div>
        <div className="nav-items">
          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="Home"
            className="nav-item"
            activeClass="active"
          >
            Home
          </NLink>

          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="about"
            className="nav-item"
            activeClass="active"
          >
            About
          </NLink>

          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="mint"
            className="nav-item"
            activeClass="active"
          >
            Mint
          </NLink>

          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="staking"
            className="nav-item"
            activeClass="active"
          >
            Staking
          </NLink>

          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="the-safe"
            className="nav-item"
            activeClass="active"
          >
            The Safe
          </NLink>
        </div>

        <div className="nav-btn" onClick={_toggleSidebar}>
          <svg
            width="27"
            height="20"
            viewBox="0 0 27 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.181641" width="27" height="4.90909" fill="white" />
            <rect y="7.54492" width="27" height="4.90909" fill="white" />
            <rect y="14.9092" width="27" height="4.90909" fill="white" />
          </svg>
        </div>
      </div>

      <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
        <button className="close-btn" onClick={_toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="sidebar-items">
          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="home"
            className="nav-item"
            activeClass="active"
            onClick={_toggleSidebar}
          >
            <p>Home</p>
          </NLink>

          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="about"
            className="nav-item"
            activeClass="active"
            onClick={_toggleSidebar}
          >
            <p>About</p>
          </NLink>

          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="mint"
            className="nav-item"
            activeClass="active"
            onClick={_toggleSidebar}
          >
            <p>Mint</p>
          </NLink>

          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="staking"
            className="nav-item"
            activeClass="active"
            onClick={_toggleSidebar}
          >
            <p>Staking</p>
          </NLink>

          <NLink
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            to="the-safe"
            className="nav-item"
            activeClass="active"
            onClick={_toggleSidebar}
          >
            <p>The Safe</p>
          </NLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
