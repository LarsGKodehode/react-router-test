import { useParams } from "react-router-dom";
import Missing404 from "../routes/Missing404/Missing404";
import { getInvoice } from "./invoice-data";

export default function Invoice(): JSX.Element {
  let params = useParams();

  let invoice = getInvoice(parseInt(params.invoiceId || ""));

  // check if invoiceId is valid
  if (!invoice) {
    return (
      <Missing404 />
    );
  };

  return (
    <main style={{
      padding: "1em",
      minWidth: "20em",
      borderRadius: `
        0
        var(--spacing-large)
        var(--spacing-large)
        0
      `,
      backgroundColor: "var(--palette-primary-500)",
      color: "var(--palette-primary-500-text"
    }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
};