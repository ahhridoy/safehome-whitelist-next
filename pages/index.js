import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [navActive, setNavActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <div>
      <Head>
        <title>The Safe Home</title>
        <meta name="description" content="Welcome to the safe home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          // background: "url(/assets/home-bg.jpg) no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: "top",
          // minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        <nav id="navbar" className={`${navActive ? "active" : ""}`}>
          <div className="container">
            <div className="logo-wrapper" style={{ cursor: "pointer" }}>
              <Link href="/">
                <img src="/assets/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
        </nav>
        <section id="white-listed">
          <div className="container">
            <div className="content">
              <h1
                className="heading"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Check if you are whitelisted !
              </h1>
              <form className="form" data-aos="fade-up" data-aos-duration="500">
                <Form.Control
                  placeholder="Your eth wallet address"
                  required
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <Button variant="light" type="submit" className="p-4">
                  Check
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
