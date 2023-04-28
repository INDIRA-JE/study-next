"use client"; // 이벤트(onClick, useState 등) 사용에 필요 : Client Component로 변경해서 사용 가능하게 해줌
import { useState } from "react"; // useState 사용 준비

export default function List() {
  let 상품 = ["Tomatoes", "Pasta", "Coconut"];
  let [수량, 수량변경] = useState(0);

  return (
    <div>
      <h2 className="title">상품목록</h2>
      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            {/* 이미지 추가 */}
            <img src={`/food${i}.png`} className="food-img" />
            {/* 상품 적용 : 순서대로 */}
            <h3>{a} $40</h3>
            <button
              onClick={() => {
                수량변경(수량 - 1);
              }}
            >
              -
            </button>
            <span> {수량} </span>
            <button
              onClick={() => {
                수량변경(수량 + 1);
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
