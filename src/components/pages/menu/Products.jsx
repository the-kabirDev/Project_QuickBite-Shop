import { useEffect, useState } from "react";
import Cart from "../../../shared/Cart";
import { GiShoppingCart } from "react-icons/gi";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
  };
  console.log(cart);

  return (
    <>
      <div className="bg-gray-50 pb-2">
        <h2 className="text-center font-semibold text-lg">POPULAR MENU</h2>
        <h1 className="text-center tracking-wider text-4xl sm:text-3xl sm:font-bold font-bold lg:mt-0 mt-2">
          Amazing Food Served <br /> With Delicacy
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center mt-12 ">
        {products.map((product) => (
          <div
            key={product.key}
            className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border-gray-100 bg-white shadow-2xl shadow-blue-500/20"
          >
            <figure className="relative m-auto flex h-60 overflow-hidden rounded-xl">
              <img
                className="object-cover"
                src={product.img}
                alt="Classic Cheeseburger"
              />
            </figure>
            <div className="mt-4 px-5 pb-5">
              <h5 className="text-2xl tracking-tight text-slate-900">
                {product.name}
              </h5>

              <div className="flex justify-between items-center">
                <h4 className="text-3xl font-bold mt-3 text-slate-900">
                  &#2547; {product.price}
                </h4>
                <h4 className="rounded-md bg-yellow-300 mt-3 px-2.5 py-0.5 text-sm font-semibold">
                  {product.rating}
                </h4>
              </div>

              <div className="flex justify-center items-center gap-3 text-lg mt-4 bg-black text-white p-2 font-semibold rounded-lg">
                <button
                  className=" tracking-wide flex justify-center items-center gap-3"
                  onClick={() => handleCart(product)}
                >
                  <GiShoppingCart className="text-3xl" />
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Cart cart={cart} />
    </>
  );
};

export default Products;
