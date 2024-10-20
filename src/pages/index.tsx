"use client";
import Image from "next/image";
import localFont from "next/font/local";
import Hero from "@/components/hero";
import ScrollSection from "@/components/scroolSection";
import Footer from "@/components/footer";
import FluidAnimation from "@/components/fluidEffect/FluidAnimation";
import Header from "@/components/Header";
import { useEffect, useRef } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden relative">
      {/* <Header/> */}

      <div id="world" />

      <div id="credits">
        <p>
          <a href="http://babeltheking.com" target="blank">
            Babel the king
          </a>{" "}
          |{" "}
          <a href="https://codepen.io/Yakudoo/" target="blank">
            my other codepens
          </a>{" "}
          |{" "}
          <a href="https://www.epic.net" target="blank">
            epic.net
          </a>
        </p>
      </div>

      <style jsx>{`
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:800);

        #world {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: #6ecccc;
          overflow: hidden;
        }

        #credits {
          position: absolute;
          width: 100%;
          margin: auto;
          bottom: 0;
          margin-bottom: 20px;
          font-family: "Open Sans", sans-serif;
          color: #328685;
          font-size: 0.7em;
          text-transform: uppercase;
          text-align: center;
        }
        #credits a {
          color: #328685;
        }

        #credits a:hover {
          color: #630d15;
        }
      `}</style>
    </main>
  );
}
