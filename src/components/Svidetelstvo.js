import React from "react";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

const documentData = [
  {
    id: 1,
    name_document: "Свидетельство о постановке на учет в налоговом органе",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2023/01/26/1288208804/Svidetel_stvo.pdf",
  }

];

export default function Svidetelstvo() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Свидетельство о постановке на учет в налоговом органе</h3>
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