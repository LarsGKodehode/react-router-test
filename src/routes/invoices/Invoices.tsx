// 3rd parties
import { NavLink, Outlet } from 'react-router-dom';

// CSS
import styles from 'Invoices.module.css';

// DATA
import { getInvoices, InvoiceData } from '../../data/data';

// Interface
interface InvoicesProps {
  title: string,
};

const invoicesProps = {
  title: "Invoices",
};

// Components
function Invoices(): JSX.Element {
  const { title } = invoicesProps;

  let invoices: Array<InvoiceData> = getInvoices();

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <h1>{title}</h1>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1em",
        }}
      >
        {invoices.map((invoice) => {
            return(
              <NavLink
                style={ ({isActive}) => {
                  return {
                    display: 'block',
                    margin: "1em",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </NavLink>
            )
          })}
      </nav>
      <Outlet />
    </div>
  );
};

export default Invoices;

export type {
  InvoicesProps,
};