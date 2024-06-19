import React from "react";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

const documentData = [
  {
    id: 1,
    name_document: "Тарифы на социальные услуги по видам социального обслуживания 2024 г.",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/01/31/1338933526/Tarify_0001.pdf",
  }


];

export default function Tariffs() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Тарифы на социальные услуги</h3>
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