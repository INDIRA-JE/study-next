"use client"; // 이벤트(onClick, useState 등) 사용에 필요 : Client Component로 변경해서 사용 가능하게 해줌
import { useState } from "react"; // useState 사용 준비

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState([0, 1, 2]);

  return (
    <div>
      <h2 className="title">상품목록</h2>
      {상품.map((product, sequence) => {
        return (
          // 첫번째 구분
          <div className="food" key={sequence}>
            {/* 두번째 구분 : 이미지 추가 */}
            <img src={`/food${sequence}.png`} className="food-img" />
            {/* 3번째 구분 : 상품 적용 : 순서대로 */}
            <h3>{product} $40</h3>
            {/* 4번째 구분 : 수량 */}
            <button
              onClick={() => {
                let copy = [...수량];
                copy[0]--;
                수량변경(copy);
              }}
            >
              -
            </button>
            <span> {수량[0]} </span>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[0]++;
                수량변경(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
