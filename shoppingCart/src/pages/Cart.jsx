import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cartItems);

  const cartTotal = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  return (
    <>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center pt-8 mt-20 font-mono">
          <h1 className="my-5 text-2xl text-gray-800">Your Cart is empty🥲</h1>
          <Link to="/">
            <p className="px-4 text-lg bg-blue-600 py-1.5 text-white rounded-md hover:bg-blue-600/90 duration-200 ease-in">
              Start shopping
            </p>
          </Link>
        </div>
      ) : (
        <div className="pt-4 mt-20 space-y-4 font-mono">
          <div className="flex justify-around mb-8 ">
            <h1 className="text-2xl font-semibold tracking-wider text-gray-700">
              Your Cart
            </h1>
            <p className="text-2xl text-gray-800">Cart Total: ${cartTotal()}</p>
          </div>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}
export default Cart;
