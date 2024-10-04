import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, remove } from "../store/CartSlice";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (product) => {
    dispatch(remove(product.path));
  };

  const calculateSubtotal = () => {
    return items.reduce(
      (total, product) => total + product.price * (product.quantity || 1),
      0
    );
  };

  const handleCheckOut = () => {
    if (items.length === 0) {
      alert("Add items into cart");
    } else {
      const order = window.confirm("Do You Want To Confirm Order?");
      if (order) {
        alert("Order Confirmed.. Visit Again");
        dispatch(clearCart());
        navigate("/"); // Navigate to the home page
      } else {
        alert("Order Rejected..");
      }
    }
  };

  return items.length === 0 ? (
    <div className="flex flex-col gap-3 items-center justify-center mb-8">
      <div className="mt-16">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="Cart is empty"
          className="h-[300px] w-[300px]"
        />
      </div>
      <h1 className="text-[22px] text-gray-500 font-bold mt-4">
        Your cart is empty
      </h1>
      <p className="text-[14px] text-gray-600">
        You can go to the home page to view more restaurants
      </p>
      <button className="uppercase py-2 px-8 font-bold text-[14px] text-white bg-[#FF5200]">
        <Link to="/"> See Restaurants Near You </Link>
      </button>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-[100vh] w-[85%] mx-auto flex-col bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <h2 className="text-lg font-medium text-gray-900">Food Cart</h2>
        <ul role="list" className="divide-y divide-gray-200 mt-8">
          {items.map((product, index) => (
            <li key={index} className="flex py-6">
              {" "}
              {/* Use product.id as the key */}
              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  alt={product.path}
                  src={`https://myswiggyapi-production.up.railway.app/images/${product.image}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="ml-4 flex flex-1 flex-col">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>{product.path || product.title}</h3>
                  <p className="ml-4">${product.price}</p>
                </div>
                <div className="flex items-end justify-between text-sm mt-2">
                  <p className="text-gray-500 pr-4">
                    Description:{" "}
                    {product.desc ||
                      `Yummy Delicious food form ${
                        product.path || product.title
                      }`}
                  </p>
                  <button
                    type="button"
                    className="font-medium text-[#FF5200] hover:text-indigo-500"
                    onClick={() => handleRemove(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${calculateSubtotal().toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <div
              onClick={handleCheckOut}
              className="flex items-center justify-center rounded-md border border-transparent bg-[#FF5200] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#e47b4a] cursor-pointer"
            >
              Checkout
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              or{" "}
              <Link
                to="/"
                className="font-medium text-[#FF5200] hover:text-indigo-500"
              >
                Continue Ordering.. <span aria-hidden="true">&rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
