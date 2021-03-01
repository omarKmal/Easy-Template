import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import PageContainer, { InnerPageContainer } from "./PageContainer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "./resposive";
import Features from "../components/Features/Features";
import Client from "../components/Client/Client";
import Marginer from "./Marginer";
import Testimonial from "../components/testimonial/Testimonial";
import PaymentFeature from "../components/paymentFeature/PaymentFeature";
import Cash from "../components/Cash/Cash";
import Prices from "../components/Prices/Prices";
import BlogPost from "../components/BlogPosts/BlogPosts";
import Footer from "../components/Footer/Footer";

function Home({
  isOpen,
  handleOpen,
  featuresData,
  error,
  lodaing,
  sliderData,
  priceData,
  blogData,
}) {
  const isMobile = useMediaQuery({
    query: `(max-width: ${deviceSize.mobile}px)`,
  });
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });
  const isLaptop = useMediaQuery({ maxWidth: deviceSize.laptop });
  const isDesktop = useMediaQuery({ maxWidth: deviceSize.desktop });

  return (
    <PageContainer>
      <Navbar
        isTablet={isTablet}
        isMobile={isMobile}
        handleOpen={handleOpen}
        isOpen={isOpen}
      />
      {isMobile || isTablet ? (
        <Dropdown handleOpen={handleOpen} isMobile={isMobile} isOpen={isOpen} />
      ) : null}
      <HeroSection
        isMobile={isMobile}
        isTablet={isTablet}
        isDesktop={isDesktop}
        isLaptop={isLaptop}
      />
      <Marginer direction="vertical" margin={50} />
      <InnerPageContainer maxWidth={!isMobile && "80%"}>
        <Client isMobile={isMobile} />
        <Marginer direction="vertical" margin={80} />
        <Features lodaing={lodaing} featuresData={featuresData} error={error} />
        <Marginer direction="vertical" margin={80} />
        <Testimonial
          isMobile={isMobile}
          isTablet={isTablet}
          sliderData={sliderData}
          error={error}
          lodaing={lodaing}
        />
        <Marginer direction="vertical" margin={80} />
        <PaymentFeature />
        {!isMobile && <Marginer direction="vertical" margin={80} />}
        <Cash />
        <Marginer direction="vertical" margin={80} />
        <Prices priceData={priceData} error={error} lodaing={lodaing} />
        <Marginer direction="vertical" margin={80} />
      </InnerPageContainer>
      <BlogPost blogData={blogData} error={error} lodaing={lodaing} />
      <Marginer direction="vertical" margin={80} />
      <InnerPageContainer maxWidth={!isTablet && "80%"}>
        <Footer />
      </InnerPageContainer>
    </PageContainer>
  );
}

export default Home;
