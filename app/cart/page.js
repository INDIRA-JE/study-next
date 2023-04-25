// import age from "./data";
import { age, name, Add } from "./data";
// 숙제
import Hi from "./hi";

export default function Cart() {
  return (
    <div>
      <h1>
        <Hi />
      </h1>
      <h2 className="title">Cart</h2>
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

function CartItem() {
  return (
    <div className="cart-item">
      <p>
        상품명 {age} {name}
      </p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}
