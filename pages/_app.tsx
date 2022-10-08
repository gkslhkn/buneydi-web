/* eslint-disable @next/next/no-css-tags */

import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect, useState } from "react";
import "../styles/all.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(
    <link
      id="style-switch"
      rel="stylesheet"
      type="text/css"
      href="/style.css"
    ></link>
  );
  var changeThemeToDark = () => {
    //document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
    setTheme(
      <link
        id="style-switch"
        rel="stylesheet"
        type="text/css"
        href="/style-dark.css"
      ></link>
    );
    localStorage.setItem("data-theme", "dark"); // save theme to local storage
  };

  var changeThemeToLight = () => {
    //document.documentElement.setAttribute("data-theme", "light"); // set theme light
    setTheme(
      <link
        id="style-switch"
        rel="stylesheet"
        type="text/css"
        href="/style.css"
      ></link>
    );
    localStorage.setItem("data-theme", "light"); // save theme to local storage
  };

  useEffect(() => {
    const storage = localStorage.getItem("data-theme");
    if (storage === "dark") {
      changeThemeToLight();
    } else if (storage == null || storage === "light") {
      changeThemeToDark();
    }
    console.log("change theme");
  }, []);
  return (
    <>
      <Script src="/functions.js" strategy="afterInteractive" />
      <Component {...pageProps} />
      {theme}
    </>
  );
}

export default MyApp;
