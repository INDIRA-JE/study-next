export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta", "Coconut"];
  let 카드사 = ["토스 카드", "카카오 카드", "삼성 카드", "현대 카드"];

  return (
    <div>
      <h2 className="title">Cart</h2>
      <CartItem item={장바구니[0]} />
      <CartItem item={장바구니[1]} />
      <CartItem item={장바구니[2]} />
      <Banner card={카드사[0]} />
      <Banner card="카카오 카드" />
      <Banner card="삼성 카드" />
      <Btn color="red" />
      <Btn color="blue" />
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Banner(props) {
  return <h5>- {props.card} 결제 진행중 -</h5>;
}

// 숙제 - 색변경
// 색 변경 버튼 Component
function Btn(props) {
  // 1. 빨간색 배경 버튼
  // return <button style={{ background: "red" }}>색 변경</button>;
  // 2. 파란색으로 코드 변경
  return <button style={{ background: props.color }}>색 변경</button>;
}
