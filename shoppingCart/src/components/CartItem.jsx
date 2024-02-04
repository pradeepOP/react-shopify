import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increaseQuantity({ id: item.id }));
  };
  const handleDecrease = () => {
    dispatch(decreaseQuantity({ id: item.id }));
  };
  const handleDelete = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="w-4/5 px-6 py-4 mx-auto font-mono bg-gray-100 rounded-sm shadow-md md:w-2/3 ">
      <div className="flex justify-between">
        <p className="text-base text-gray-700 md:tracking-wider md:text-xl ">
          {item.title}
        </p>
        <p className="text-base text-gray-700 md:tracking-wider md:text-xl">
          Price:${item.price}
        </p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <img src={item.imageURL} alt="/" className="object-cover w-28 h-28" />
        <div className="flex gap-2 text-xl md:gap-5">
          <button
            onClick={handleDecrease}
            className="px-3 py-1 bg-gray-200 rounded-sm">
            -
          </button>
          <span className="py-1">{item.quantity}</span>
          <button
            onClick={handleIncrement}
            className="px-3 py-1 bg-gray-200 rounded-sm ">
            +
          </button>
        </div>
        <div>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-500/80 ">
            <AiOutlineDelete size={35} />
          </button>
        </div>
      </div>
      <p className="pr-2 text-xl text-right text-gray-700">
        Total: ${item.price * item.quantity}
      </p>
    </div>
  );
}
export default CartItem;
