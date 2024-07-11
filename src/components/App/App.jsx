import css from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import PaymentsPage from "../../pages/PaymentsPage";
import PaymentDetailsPage from "../../pages/PaymentDetailsPage";
import NotFoundPage from "../../pages/NotFoundPage";

export default function App() {
  return (
    <div className={css.container}>
      <h1>Routing in React</h1>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route
          path="/payments/:paymentId"
          element={<PaymentDetailsPage />}
        ></Route>
        <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </div>
  );
}
