export default function CartLayout({ children }) {
  return (
    <div>
      <p className="cardEvent">현대카드 무이자 이벤트 중</p>
      {children}
    </div>
  );
}
