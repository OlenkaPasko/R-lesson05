import {Suspense, useEffect, useState, useRef } from "react";
import {
  NavLink,
  useParams,
  Outlet,
  useLocation,
  Link,
} from "react-router-dom";
import { getPaymentById } from "../payments-api";
import PaymentInfo from "../components/PaymentInfo";
//useParams;хук який повертає динамічні параметри


export default function PaymentDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/payments"); //посилання куди повертатись.
  //якщо є location.state,повертаємось до нього,на маршрут з якого прийшло,якщо нема?? "/payments"
  //Ref;створюй реф, одразу ініціалізуй, запам'ятай. Ref не змінюється запам'ятовує location.state при монтуванні

  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);

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
      <Link to={backLinkRef.current}>Go back</Link>
      {payment && <PaymentInfo payment={payment} />}
      <ul>
        <li>
          <NavLink to="bank">Bank info</NavLink>
        </li>
        <li>
          <NavLink to="receipt">Receipt info</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading child route component</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
//Спочатку створюємо лінки які змінюють юрл-NavLink,
// а потім оголошуємо раути, тобто маршрути, які будуть рендирити компонент
//без слешів,це додати до поточного to="bank",відносний шлях, береться поточний і додається вкінець
//to = "/bank" абсолютний шлях, бере повнюстю весь шлях і додоє
//<Outlet /> вбудований. щоб працювали вкладені маршрути:BankInfo і PaymentReceipt
