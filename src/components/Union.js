import React from "react";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

const documentData = [
  {
    id: 1,
    name_document: "Коллективный договор",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/06/07/1327692748/Kollektivny_j_dogovoro_2023-2026_compressed.pdf",
  }

];

export default function Union() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Коллективный договор</h3>
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