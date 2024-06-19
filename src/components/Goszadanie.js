import React from "react";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

const documentData = [
  {
    id: 1,
    name_document: "Государственное задание",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/01/19/1338398672/Gosudarstvennoe_zadanie_na_2024_g.pdf",
  },
  {
    id: 2,
    name_document: "Отчет о результатах деятельности на 01.2023",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2023/04/17/1275820159/Otchet_o_rezul_tatx_deyatel_nosti_gosuda_zhdeniya._compressed_compressed.pdf",
  }
];

export default function Goszadanie() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Государственное задание</h3>
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