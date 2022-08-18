// 3rd Parties
import {
  useLocation,
  NavLink,
} from 'react-router-dom';


// CSS
import styles from 'QueryNavLink.module.css';


// Interface
interface QueryNavLinkProps {
  to: string,
  key: number,
  style?: any,
};

// Components
function QueryNavLink({to, ...props}: QueryNavLinkProps | any): JSX.Element {

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