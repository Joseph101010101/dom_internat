
import React from "react";

const documentData = [
  {
    id: 1,
    name_document: "Антикоррупционная экспертиза",
    document_src: "https://cloud.mail.ru/public/7H6F/3gPytCF2A",
  }

];

export default function Anticorruption() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ</h3>
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