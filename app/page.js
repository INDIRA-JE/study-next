import Link from "next/link";

export default function Home() {
  let name = "JE";

  return (
    <div>
      {/* Layout 작성 */}
      {/* 본문 */}
      <h2 className="title">애플후레시</h2>
      <p className="title-sub">by dev {name}</p>
    </div>
  );
}
