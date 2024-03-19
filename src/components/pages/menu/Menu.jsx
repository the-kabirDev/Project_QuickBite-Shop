import burgerWithFries from "../../images/Burger With Fries .png";
import pizza from "../../images/banner2.png";
import noodles from "../../images/Noodles.png";
import wings from "../../images/Wings.png";
import doubleBurger from "../../images/Double Layer Burger.png";
import samosa from "../../images/samosa.png";
const Menu = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {/* Burger */}
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg  border-gray-100 bg-white shadow-md ">
          <a
            className="relative m-auto flex h-60 overflow-hidden rounded-xl"
            href=""
          >
            <img
              className="object-cover"
              src={burgerWithFries}
              alt="product image"
            />
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                Burger With Fries
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  &#2547; 250
                </span>
              </p>
              <div className="flex items-center">
                <span className="fa fa-star checked text-orange-300"></span>
                <span className="fa fa-star checked text-orange-300"></span>
                <span className="fa fa-star checked text-orange-300"></span>
                <span className="fa fa-star checked text-orange-300"></span>
                <span className="fa fa-star text-orange-300"></span>
                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
          </div>
        </div>
        {/* Pizza */}
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a
            className="relative m-auto flex h-60 overflow-hidden rounded-xl"
            href=""
          >
            <img className="object-cover" src={pizza} alt="product image" />
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                Chicken Pizza
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  &#2547; 550
                </span>
              </p>
              <div className="flex items-center">
                <span className="fa fa-star checked text-orange-300"></span>
                <span className="fa fa-star checked text-orange-300"></span>
                <span className="fa fa-star checked text-orange-300"></span>
                <span className="fa fa-star checked text-orange-300"></span>
                <span className="fa fa-star text-orange-100"></span>

                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  4.5
                </span>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
          </div>
        </div>
        {/* Noodles */}
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a
            className="relative m-auto flex h-60 overflow-hidden rounded-xl"
            href=""
          >
            <img className="object-cover" src={noodles} alt="product image" />
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">Noodles</h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  &#2547; 150
                </span>
              </p>
              <div className="flex items-center">
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star"></span>

                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  4.0
                </span>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
          </div>
        </div>
        {/* Wings */}
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a
            className="relative m-auto flex h-60 overflow-hidden rounded-xl"
            href=""
          >
            <img className="object-cover" src={wings} alt="product image" />
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                Chicken Hot Wings
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  &#2547; 200
                </span>
              </p>
              <div className="flex items-center">
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star text-orange-100"></span>

                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  4.5
                </span>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
          </div>
        </div>
        {/* Double Layer Burger */}
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a
            className="relative m-auto flex h-60 overflow-hidden rounded-xl"
            href=""
          >
            <img
              className="object-cover"
              src={doubleBurger}
              alt="product image"
            />
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                Double Layer Burger
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  &#2547; 350
                </span>
              </p>
              <div className="flex items-center">
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star text-orange-300"></span>

                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
          </div>
        </div>
        {/* Samosa */}
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <a
            className="relative m-auto flex h-60 overflow-hidden rounded-xl"
            href=""
          >
            <img className="object-cover" src={samosa} alt="product image" />
          </a>
          <div className="mt-4 px-5 pb-5">
            <a href="#">
              <h5 className="text-xl tracking-tight text-slate-900">
                Samosas With Green Chatni
              </h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-slate-900">
                  &#2547; 100
                </span>
              </p>
              <div className="flex items-center">
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star  text-orange-300"></span>
                <span className="fa fa-star text-orange-300"></span>

                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                  5.0
                </span>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
