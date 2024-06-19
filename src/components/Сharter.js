import React from "react";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

const documentData = [
  {
    id: 1,
    name_document: "Устав от 31.10.22",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2022/11/10/1287265636/Ustav_compressed.pdf",
  },
  {
    id: 2,
    name_document: "Устав (изменения) от 26.06.2023",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/03/14/1340163537/Izmenenie_v_ustav_Astraxanskij_dom_2023_po_uslugam_compressed.pdf",
  },
  {
    id: 3,
    name_document: "Устав (изменения) от 18.08.2023",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2023/11/12/1337124861/Ustav_izmeneniya_ot_18.08.2023.pdf",
  }

];

export default function Charter() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Устав автономного учреждения</h3>
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