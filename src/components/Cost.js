import React, { useState } from "react";
const data = [
  {
    id: 1,
    title: "Услуга 1",
    price: 100,
  },
  {
    id: 2,
    title: "Услуга 2",
    price: 1002,
  },
  {
    id: 3,
    title: "Услуга 3",
    price: 1002,
  },
  {
    id: 4,
    title: "Услуга 4",
    price: 1002,
  },
  {
    id: 5,
    title: "Услуга 5",
    price: 1002,
  },
  {
    id: 6,
    title: "Услуга 6",
    price: 1002,
  },
  {
    id: 7,
    title: "Услуга 7",
    price: 1002,
  },
];
export default function Cost() {
  const [pickedSelectorIds, setPickedSelectorsIds] = useState([]);
  const [summ, setSumm] = useState(0);
  const onSelectorClick = (selector) => {
    const selectorPicked = Boolean(
      pickedSelectorIds.find((p) => p === selector.id)
    );
    if (!selectorPicked) {
      setSumm((prevState) => prevState + selector.price);
      setPickedSelectorsIds((prevState) => [...prevState, selector.id]);
    } else {
      setPickedSelectorsIds((prevState) => [
        ...prevState.filter((p) => p !== selector.id)
      ]);
      setSumm((prevState) => prevState - selector.price);
    }
  };
  return (
    <div className="cost">
      <h1 className="h1-cost">Расчёт стоимости услуг</h1>
      <p className="cost-desc">
        Узнайте стоимости набора платных услуг. Выберите необходимое.
      </p>
      <div className="selectors">
        {data.map((selector) => (
          <div key={selector.id} className="selector-item">
            <div
              onClick={() => onSelectorClick(selector)}
              className="selector-title-selector-text">
              {selector.title}
            </div>
          </div>
        ))}
      </div>
      <div className="summ">Итого: {summ} руб. </div>
    </div>
  );
}
