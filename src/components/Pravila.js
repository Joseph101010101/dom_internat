import React from "react";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

const documentData = [
  {
    id: 1,
    name_document: "Изменения в правила внутреннего трудового распорядка",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/06/07/1327677457/Izmeneniya_v_pravila_vnutrennego_trudovogo_rasporyadka_2020.pdf",
  },
  {
    id: 2,
    name_document: "Правила внутреннего трудового распорядка 2019",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/06/07/1327677803/Pravila_vnutrennego_trudovogo_rasporyadka_dlya_rabotnikov_2019_compressed.pdf",
  },
  {
    id: 3,
    name_document: "Правила внутреннего распорядка для получателей социальных услуг 2023",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/06/19/1328185078/Pravila_vnutrennego_trudovogo_rasporyadka_2023_compressed.pdf",
  }


];

export default function Pravila() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Правила внутреннего трудового распорядка</h3>
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