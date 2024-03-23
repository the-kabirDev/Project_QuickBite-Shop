import CartItem from "../components/pages/menu/CartItem";
const Cart = ({ cart }) => {
  return (
    <div className="drawer drawer-end">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor="cart-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Page content here */}
          {cart?.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
