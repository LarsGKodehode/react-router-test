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
    let linkArray: Array<JSX.Element> = [<p>The list is empty</p>];



    return linkArray;
  };


  return(
    <header>
      <ul>
        {React.Children.toArray(createLinks(linksProps))}
      </ul>
    </header>
  )
};

export default NavHeader;

export type {
  NavHeaderProp,
};