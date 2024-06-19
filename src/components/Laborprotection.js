
import React from "react";

const documentData = [
  {
    id: 1,
    name_document: "Перечень рекомендуемых мероприятий по улучшению условий труда 23.11.2022",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2023/05/10/1278814165/PERECHEN.pdf",
  },
  {
    id: 2,
    name_document: "Сводная ведомость результатов проведения специальной оценки условий труда 23.11.2022 ",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2023/05/10/1278813742/svodnaya_vedomomt.pdf",
  }

];

export default function Anticorruption() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Охрана труда</h3>
        <div className="document-place">
          {documentData.map((item) => (
            <div key={item.id} className="document-item-box">
              <div className="document-item">
                <a className="a-news" href={item.document_src}>{item.name_document}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );}