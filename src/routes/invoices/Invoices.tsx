// 3rd parties
import { Link, Outlet } from 'react-router-dom';

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
              <Link
                style={{display: 'block', margin: "1em"}}
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </Link>
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