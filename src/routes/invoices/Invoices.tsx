// 3rd parties
import {
  Outlet,
  useSearchParams,
} from 'react-router-dom';

// CSS
import styles from 'Invoices.module.css';

// DATA
import { getInvoices, InvoiceData } from '../../data/data';

// COMPONENTS
import QueryNavLink from '../../components/QueryNavLink/QueryNavLink';
import { CSSProperties } from 'react';

// Interface
interface InvoicesProps {
  title: string,
};

const invoicesProps = {
  title: "Invoices",
};

// Component
function Invoices(): JSX.Element {
  const { title } = invoicesProps;

  let invoices: Array<InvoiceData> = getInvoices();
  let [serchParams, setSearchParams] = useSearchParams();

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

        <input
          value={serchParams.get("filter" || "") || undefined}
          onChange={(event) => {
            let filter = event.target.value;
            if(filter) {
              setSearchParams({filter});
            } else {
              setSearchParams({});
            };
          }}
        />

        {invoices
          .filter ((invoice) => {
            let filter = serchParams.get("filter");
            if(!filter) return true;
            let name = invoice.name.toLowerCase()
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => {
            return(
              <QueryNavLink
                style={(isActive: boolean) => {
                    return {
                      display: 'block',
                      margin: "1em",
                      color: isActive ? "red" : "",
                    };
                  }
                }
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
              >
                {invoice.name}
              </QueryNavLink>
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