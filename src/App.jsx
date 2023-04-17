import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";
import ModalBtn from "./components/ModalBtn";
import CartItems from "./Cart/CartItems";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { fetchAllProducts } from "./features/Cart/CartSlice";
function App() {
  const dispatch = useDispatch();
  const { toggle } = useSelector((state) => state.modal);
  const { message } = useSelector((state) => state.cart);

  useEffect(() => {
    if (message && message.length > 0) {
      toast.success(message);
    }
  }, [message]);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);
  return (
    <>
      <Nav />
      <ModalBtn />
      <Toaster />
      {toggle && <CartItems />}
      <h1 className="text-center my-2"> Products</h1>

      <Products />
    </>
  );
}

export default App;
