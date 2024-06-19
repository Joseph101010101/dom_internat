import React from "react";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

const documentData = [
  {
    id: 1,
    name_document: "План финансово-хозяйственной деятельности на 2024 год",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/03/06/1340594250/PFXD_ot_29.12.2023_na_2024_god_compressed.pdf",
  }


];

export default function HozPlane() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>План финансово-хозяйственной деятельности</h3>
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