const CartItem = ({ item }) => {
  const { price } = item;
  let totalPrice = 0;
  totalPrice += price;

  return (
    <div>
      <h1 className="text-lg">
        Total Price:
        <span className="text-red-600 text-xl ml-2">{totalPrice}</span>
      </h1>
    </div>
  );
};

export default CartItem;
