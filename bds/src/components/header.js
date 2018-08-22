import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className="table-of-contents bds-pad-lg-sm bds-flex">
    <a href="#" className="hamburger">
      <div></div>
      <div></div>
      <div></div>
    </a>
    <h1 className="title bds-txt-bold bds-marg-lg-x-xs">{siteTitle}</h1>
    <nav>
      <ul>
          <li data-section="colorPalette"><a href="#colorPalette">Color Palette</a></li>
          <li data-section="typography"><a href="#typography">Tyography</a></li>
          <li data-section="buttons"><a href="#buttons">Buttons</a></li>
          <li data-section="spacing"><a href="#spacing">Spacing</a></li>
          <li data-section="hideshow"><a href="#hideshow">Hide/Show</a></li>
          <li data-section="utilities"><a href="#utilities">Utility</a></li>
          <li data-section="flexbox"><a href="#flexbox">Flexbox</a></li>
          <li data-section="pageStructure"><a href="#pageStructure">Page Structure</a></li>
      </ul>
    </nav>
  </header>
)

export default Header
