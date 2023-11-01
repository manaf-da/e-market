import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ActivationPage,
  BestSellingPage,
  CheckoutPage,
  EventPage,
  FAQPage,
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProductPage,
  ProfilePage,
  ShopCreatePage,
  SignupPage,
  SellerActivationPage,
  ShopLoginPage,
} from "./routes/Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadSeller, loadUser } from "./redux/actions/user";
import {
  ShopHomePage,
  ShopCreateProductPage,
  ShopAllProductsPage,
  ShopCreateEventsPage,
  ShopAllEventsPage,
  ShopAllCouponsPage,
} from "./routes/ShopRoutes.js";
import ProtectedRoute from "./routes/ProtectedRoute";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadSeller());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:name" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        ¨
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopCreateEventsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRoute>
              <ShopCreateProductPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRoute>
              <ShopAllProductsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRoute>
              <ShopCreateEventsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <ShopAllEventsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-coupons"
          element={
            <SellerProtectedRoute>
              <ShopAllCouponsPage />
            </SellerProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
};

export default App;
