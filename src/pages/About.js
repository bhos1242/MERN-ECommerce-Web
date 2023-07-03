import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Abouts us - Vtech Ecomm"}>
      <div className="container about-container">
        <h1 className="text-center">Welcome to Vtech Ecomm</h1>
        <p>
          At Vtech Ecomm, we strive to provide the best online shopping
          experience for our customers. We offer a wide range of high-quality
          products from various categories, including electronics, fashion, home
          decor, and more.
        </p>
        <p>
          Our mission is to make shopping convenient, enjoyable, and secure.
          With our user-friendly website and seamless checkout process, you can
          easily browse through our extensive product catalog, find exactly what
          you need, and make a purchase with confidence.
        </p>
        <p>
          We are committed to delivering excellent customer service. Our
          dedicated support team is available to assist you with any inquiries,
          product recommendations, or order assistance. We value your
          satisfaction and aim to exceed your expectations at every step of your
          shopping journey.
        </p>
        <p>
          Shopping at Vtech Ecomm is not just about buying products; it's about
          discovering new trends, exploring exciting deals, and connecting with
          a community of like-minded shoppers. Stay updated with our latest
          arrivals, exclusive offers, and promotions by subscribing to our
          newsletter and following us on social media.
        </p>
        <p>
          Thank you for choosing Vtech Ecomm. We look forward to serving you and
          providing you with an exceptional online shopping experience. Happy
          shopping!
        </p>
      </div>
    </Layout>
  );
};

export default About;
