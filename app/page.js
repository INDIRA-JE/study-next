export default function Home() {
  let name = "JE";
  let link = "https://www.naver.com/";

  return (
    <div>
      {/* Layout 작성 */}
      <h2 className="title">애플후레시</h2>
      <p className="title-sub">by dev {name}</p>
      <a href={link}>네이버 링크</a>
    </div>
  );
}
