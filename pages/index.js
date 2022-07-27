import { Form } from "react-bootstrap";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Safe Home</title>
        <meta name="description" content="Welcome to the safe home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          overflow: "hidden",
        }}
      >
        <Navbar />
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
                <Form.Control placeholder="Your eth wallet address" required />
                <div className="btn-wrapper">
                  <button className="connect-btn">
                    <div className="btn-inner">
                      <svg
                        preserveAspectRatio="none"
                        viewBox="0 0 412 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.258599 8.90226C0.205156 9.45195 0.607446 9.94089 1.15714 9.99433C1.70683 10.0478 2.19577 9.64548 2.24921 9.09579L0.258599 8.90226ZM9.53566 1.99995C10.0879 2.00459 10.5394 1.56065 10.544 1.00838C10.5487 0.456116 10.1047 0.00465614 9.55246 1.68681e-05L9.53566 1.99995ZM2.24921 9.09579C2.54186 6.08576 3.0667 4.39981 4.03181 3.41946C4.96458 2.47195 6.52793 1.97468 9.53566 1.99995L9.55246 1.68681e-05C6.42753 -0.0262339 4.13907 0.459653 2.60656 2.01637C1.10639 3.54023 0.552477 5.87957 0.258599 8.90226L2.24921 9.09579Z"
                          fill="#fff"
                        />
                        <path
                          d="M411.741 42.5959C411.795 42.0462 411.393 41.5572 410.843 41.5038C410.293 41.4504 409.804 41.8527 409.751 42.4023L411.741 42.5959ZM402.982 48.9991C402.43 48.9945 401.979 49.4384 401.974 49.9907C401.969 50.543 402.413 50.9944 402.966 50.9991L402.982 48.9991ZM409.751 42.4023C409.476 45.2242 408.985 46.7846 408.097 47.6868C407.241 48.5562 405.799 49.0228 402.982 48.9991L402.966 50.9991C405.899 51.0237 408.067 50.5685 409.523 49.0899C410.946 47.6441 411.466 45.4303 411.741 42.5959L409.751 42.4023Z"
                          fill="#fff"
                        />
                      </svg>
                      Connect Wallet
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
