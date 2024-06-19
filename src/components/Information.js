import React from "react";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

const documentData = [
  {
    id: 1,
    name_document: "Сведения о предоставлении социальных услуг за 2 полугодие 2023 г.",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2024/02/01/1338995671/Svedeniya_o_predostavlenii_social_ny_x_uslug_za_2_polugodie_2023.png",
  }


];

export default function Information() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Сведения об объеме предоставляемых социальных услуг</h3>
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