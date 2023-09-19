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
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";
import { ShopHomePage } from "./routes/ShopRoutes.js";
import SellerProtectedRoute from "./SellerProtectedRoute";

const App = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { isLoading, isSeller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadSeller());
  }, []);

  return (
    <>
      {loading || isLoading ? null : (
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
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
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
                <SellerProtectedRoute isSeller={isSeller}>
                  <ShopHomePage />
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
      )}
    </>
  );
};

export default App;
