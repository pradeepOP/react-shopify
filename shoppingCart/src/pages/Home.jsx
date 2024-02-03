import Product from "../components/Product";
import { products } from "../data";
function Home() {
  return (
    <div className="grid gap-12 px-10 mt-20  md:grid-cols-2 lg:grid-cols-3">
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
}
export default Home;
