import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
function Product({ item }) {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(addToCart(item));
  };
  return (
    <div className="pt-4 font-mono bg-gray-100 rounded-lg shadow-md">
      {/* image container */}
      <div className="flex justify-center pt-4">
        <img className="object-cover w-72 h-72 " src={item.imageURL} alt="/" />
      </div>
      {/* product details */}
      <div className="p-6 mt-6 space-y-4 text-gray-800">
        <h2 className="text-xl ">{item.title}</h2>
        <p className="text-lg ">Price: ${item.price}</p>
        <p className="text-lg">Category: {item.category}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg">Rating: {item.rating}</span>
          <button
            onClick={addItem}
            className="px-5 bg-blue-500 py-1.5 rounded-md text-lg text-white hover:bg-blue-600 duration-200 ease-in">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;
