import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

// import the Head component for appending elements to the head of the page
import Head from "next/head";

// header container
const Header = () => (
  <Container>
    {/* Add the favicon */}
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
      <link rel="manifest" href="/favicon_io/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#0F1624" />
    </Head >

    {/* div for adding link text and image */}
    <Div1>
      {/* link points self */}
      <Link href="/">
        <a style={{ display: "flex", alignitems: "center", color: "#5EE6EB", marginBottom: "10px" }}>
          <img
            src="/images/logo.png"
            alt="Suyash logo"
            width="200px"
            height="65px"
          />
        </a>
      </Link>
    </Div1>

    {/* second div for links to navigate in site */}
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>

    {/* Adding social media link sections */}
    <Div3>
      <SocialIcons href="https://github.com/sthsuyash">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sthsuyash/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;
