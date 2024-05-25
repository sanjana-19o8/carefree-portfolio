import React from "react";
import { Helmet } from "react-helmet-async";
import { meta } from "../../content_option";

import Hero from "../../components/hero";
import { AboutComponent } from "../../components/about_copy";

export const About = () => {
  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg="/images/aboutme.jpg"
        title="About ME"
      />
      <AboutComponent>
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
      </AboutComponent>
    </>
  );
};
