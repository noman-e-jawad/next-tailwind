import Head from "next/head";
import Image from "next/image";
import Features from "../src/components/Features";
import Testimonial from "../src/components/Testimonial";
import CTA from "../src/components/CTA";
import Footer from "../src/components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Features />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}
