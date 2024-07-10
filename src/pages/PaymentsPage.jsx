import { useEffect, useState } from "react";
import PaymentList from "../components/PaymentList/PaymentList";
import { getPayments } from "../payments-api"; 

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
   useEffect(() => {
     async function fetchPayments() {
       try {
         const data = await getPayments();
         setPayments(data);
       } catch (error) {}
     }
     fetchPayments();
   }, []);


  return (
    <div>
      <PaymentList payments={payments} />
    </div>
  );
}
