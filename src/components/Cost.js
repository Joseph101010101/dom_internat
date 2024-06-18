import React, { useState } from "react";
const data = [
  {
    id: 1,
    title: "Стирка белья",
    price: 300,
  },
  {
    id: 2,
    title: "Массаж 12 сеансов",
    price: 1500,
  },
  {
    id: 3,
    title: "Доставка пищи из столовой в комнату",
    price: 900,
  },
  {
    id: 4,
    title: "Услуги стрижки волос (мужская)",
    price: 250,
  },
  {
    id: 5,
    title: "Услуги стрижки волос (женская)",
    price: 300,
  },
  {
    id: 6,
    title: "Услуги стрижки волос + окрашивание (женская)",
    price: 600,
  },
  {
    id: 7,
    title: "Стрижка налысо",
    price: 52,
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
        Узнайте стоимости набора платных услуг. Выберите необходимое.<br/> Все цены указаны за месяц обслуживания.
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
