export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  /* 
  // *map 사용법
  // let 어레이 = [2, 3, 4];
  // *1. 반복 출력
  // 어레이.map(() => {
  //   console.log(어레이);
  //   console.log("안녕");
  // });
  // *2. array 자료 출력
  // 어레이.map((a, i) => {
  // console.log(i);
  // });
  // *3. array 자료값 변경(return)
  // let b = 어레이.map(() => {
  //   return 10;
  // });
  // console.log(b);
  */

  상품.map((a, b) => {
    // console.log("상품 a : ", a);
    // console.log("순서 b : ", b);
  });

  return (
    <div>
      <h3 className="title">상품목록</h3>
      {상품.map((product, sequence) => {
        // console.log("product : ", product);
        // console.log("sequence", sequence);

        return (
          <div className="food">
            <h4>
              {/* 나의 풀이 : 순서를 주고 상품명을 출력 */}
              {sequence}, {product} $40
              {/* 정답 2가지
              {상품[sequence]} $40
              {product} $40 */}
            </h4>
          </div>
        );
      })}

      {/* [ 반복되는 코드 삭제 ]
      <div className="food">
        <h4>{상품[1]} $40</h4>
      </div>
      <div className="food">
        <h4>{상품[2]} $40</h4>
      </div> */}
    </div>
  );
}
