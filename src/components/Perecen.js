
import React from "react";

const documentData = [
  {
    id: 1,
    name_document: "Перечень закупаемых товаров, работ, услуг",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/06/07/1327679270/Perechen_TRU_dlya_zakupki_u_sub_ektov_MSP_s_izmeneniyami_ot_marta_2023_god.pdf",
  }

];

export default function Perecen() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Перечень закупаемых товаров, работ, услуг</h3>
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