// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import { faGithub, faGoogle, faYelp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AppBar, Grid, Toolbar } from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll';

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const StyledFooterToolbar = styled(Toolbar)`
  background-color: #141421cf;
  height: 20em;
  border-top: 50px solid #323235d1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const StyledSubFooter = styled(Toolbar)`
  background-color: #008000b3;
  display: flex;
  justify-content: center;
`
const SocialIconsGrid = styled(Grid)`
  display: flex;
  justify-content: space-between;
  width: 30%;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 0.5em;
  @media (min-width: 960px) {
    width: 20%;
  }
  @media (min-width: 960px) {
    width: 15%;
  }
`
const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`
const FooterLinkGrid = styled(Grid)`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  @media (min-width: 960px) {
    width: 20%;
  }
  @media (min-width: 960px) {
    width: 15%;
  }
`
const FooterSpan = styled.span`
  &:hover {
      cursor: pointer;
  }
`
// ---------------------------------------------------------------------------------- //

const Footer = () => (
  <AppBar position="static" style={{ marginTop: "2em" }}>
    <StyledFooterToolbar>
      <FooterLinkGrid item>
        <FooterLink to="/">Home</FooterLink>
        {"|"}
        {/* // ? - 'scrollTo' provides a smooth scrolling effect to anchor elements on the page */}
        <FooterSpan onClick={() => scrollTo('#top')}>Back to top</FooterSpan>
      </FooterLinkGrid>
      <SocialIconsGrid item>
        <a
          href="https://github.com/Ajsalemo/Matcha-Tea-Search"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ fontSize: "2em", color: "#000" }}
          />
        </a>
        <a
          href="https://www.yelp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faYelp}
            style={{ fontSize: "2em", color: "#c41200" }}
          />
        </a>
        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGoogle}
            style={{ fontSize: "2em", color: "#4885ed" }}
          />
        </a>
      </SocialIconsGrid>
    </StyledFooterToolbar>
    <StyledSubFooter>&copy; Copyright Anthony Salemo | 2020</StyledSubFooter>
  </AppBar>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Footer

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
