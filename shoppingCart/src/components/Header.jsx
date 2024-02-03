import { FaShopify } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const cart = useSelector((state) => state.cartItems);
  return (
    <div className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-12 py-5 bg-gray-200">
      <div className="flex items-center gap-1 ">
        <Link to="">
          <FaShopify size={40} className="text-teal-600" />
        </Link>
        <Link to="">
          <span className="text-3xl font-semibold text-gray-700">Shopify</span>
        </Link>
      </div>
      <div className="">
        <Link to="cart">
          <AiOutlineShoppingCart size={40} className="relative text-gray-600" />
          <span className="absolute px-3 text-xl font-semibold text-gray-800 bg-gray-300 rounded-full top-4 right-8">
            {cart.length ? cart.length : ""}
          </span>
        </Link>
      </div>
    </div>
  );
}
export default Header;
