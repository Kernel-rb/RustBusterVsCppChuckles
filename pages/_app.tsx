import React, { FC } from "react";
import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/index.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Layout from "../components/Layout";
import { DefaultSeo } from "next-seo";
import SEO from "@/next-seo.config";
import Head from "next/head";

config.autoAddCss = false;

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="/public/favicon.ico" />
    </Head>

    <DefaultSeo {...SEO} />
    <Layout>
      <Component {...pageProps} />
      <div className="footer">
        <FontAwesomeIcon  /> By <span>kernel rb</span>, Inspired
        by <span>AlaaZorkane</span>
      </div>
    </Layout>

    <style jsx>{`
      .footer {
        text-align: center;
        margin-bottom: 1rem;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        font-family: "Century";
        font-size: 14px;
      }

      .footer span {
        font-weight: bold;
        color: #f81ce5;
      }
    `}</style>
  </>
);

export default App;

