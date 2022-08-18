import React from "react";
import { LinkProps } from "react-router-dom";

// Interfaces
interface NavHeaderProp {
  title: string,
  linksProps: Array<LinkProps>,
};


// Components
function NavHeader(props: NavHeaderProp) {
  const {title, linksProps } = props;

  /**
   * Creates links
   */
  function createLinks(linksProps: Array<LinkProps>): Array<JSX.Element> {
    const linkArray: Array<JSX.Element> = [<p>The list is empty</p>];



    return linkArray;
  };


  return(
    <header>
      <h1
        style={{
          textDecoration: "underline",
          fontSize: "400%",
        }}
      >{title}</h1>
    </header>
  )
};

export default NavHeader;

export type {
  NavHeaderProp,
};