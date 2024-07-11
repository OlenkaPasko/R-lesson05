import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPaymentById } from "../payments-api";
import PaymentInfo from "../components/PaymentInfo";
//useParams;хук який повертає динамічні параметри

export default function PaymentDetailsPage() {
    const { paymentId } = useParams();
    const [payment, setPyment] = useState(null);

  useEffect(() => {
    async function fetchPayments() {
      try {
          const data = getPaymentById(paymentId);
          setPyment(data);
      } catch (error) {}
    }
    fetchPayments();
  }, [paymentId]);
    return (
      <div>
            <h2>PaymentDetailsPage - {paymentId}</h2>
            {payment && <PaymentInfo payment={payment}/>}
      </div>
    );
}
