import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PaymentList from "../components/PaymentList/PaymentList";
import OwnerFilter from "../components/OwnerFilter/OwnerFilter";
import { getPayments } from "../payments-api";


//стан на лодінг і ерор теж обов'язково доробити
export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  //const [ownerFilter, setOwnerFilter] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const ownerFilter = searchParams.get("owner") ?? ""; //таким чином отримуємо поточне значення фільтру
  //set - один параметр для поточних переметрів/замість стану
  const changeOwnerFilter = (newOwner) => {
    searchParams.set("owner", newOwner);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    async function fetchPayments() {
      try {
        const data = await getPayments();
        setPayments(data);
      } catch (error) {}
    }
    fetchPayments();
  }, []);

const filteredPayments = useMemo(() => {
  return payments.filter((payment) =>
    payment.cardOwner.toLowerCase().includes(ownerFilter.toLowerCase())
  );
}, [ownerFilter, payments]);

  return (
    <div>
      <OwnerFilter value={ownerFilter} onFilter={changeOwnerFilter} />
      {payments.length > 0 && <PaymentList payments={filteredPayments} />}
    </div>
  );
}
