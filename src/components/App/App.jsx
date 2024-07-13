import { lazy,Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
//import HomePage from "../../pages/HomePage";
//import AboutPage from "../../pages/AboutPage";
//import PaymentsPage from "../../pages/PaymentsPage";
//import PaymentDetailsPage from "../../pages/PaymentDetailsPage";
//import NotFoundPage from "../../pages/NotFoundPage";
import BankInfo from "../BankInfo";
import PaymentReceipt from "../PaymentReceipt";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage"));
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const PaymentsPage = lazy(() => import("../../pages/PaymentsPage"));
const PaymentDetailsPage = lazy(() => import("../../pages/PaymentDetailsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));



export default function App() {
  return (
    <div className={css.container}>
      <h1>Routing in React</h1>
      <Navigation />
      <Suspense fallback={<div>Loading page code...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
            <Route path="bank" element={<BankInfo />} />
            <Route path="receipt" element={<PaymentReceipt />} />
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
