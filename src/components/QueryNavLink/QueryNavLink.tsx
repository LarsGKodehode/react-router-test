// 3rd Parties
import {
  useLocation,
  NavLink,
} from 'react-router-dom';


// CSS
import styles from 'QueryNavLink.module.css';
import { CSSProperties } from 'react';


// Interface
interface QueryNavLinkProps {
  to: string,
  style: CSSProperties,
};

// Components
function QueryNavLink({to, ...props}: QueryNavLinkProps): JSX.Element {

  let location = useLocation();

  return (
    <NavLink
      to={to + location.search}
      {...props}
    />
  );
};

export default QueryNavLink;

export type {
  QueryNavLinkProps,
};