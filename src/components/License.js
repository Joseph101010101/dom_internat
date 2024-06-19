import React from "react";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

const documentData = [
  {
    id: 1,
    name_document: "Выписка из реестра лицензий на осуществление медицинской деятельности  по состоянию на 04.05.2023 г.",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2023/05/04/1279128384/1.L041-01153-30_00323665.pdf",
  },
  {
    id: 2,
    name_document: "Лицензия на осуществление медицинской деятельности",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2019/07/11/1261081453/Licenziya_medicinskaya_deyatel_nost.pdf",
  },
  {
    id: 3,
    name_document: "Лицензия на осуществление фармацевтической деятельности",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2019/07/11/1261081451/Licenziya_farmocevticheskaya_deyatel_nost.pdf",
  },
  {
    id: 4,
    name_document: "Лицензия на осуществление эксплуатации взрывоопасных и химически опасных производственных объектов",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2019/07/11/1261081450/Licenziya_na_osushhestvlenie_e_kspluatacii_vzry_voopasny_x_proizv_ob_ektov.pdf",
  },
  {
    id: 5,
    name_document: "Лицензия на осуществление образовательной деятельности",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2019/07/11/1261081452/Licenziya_na_obrazovatel_nuyu_deyatel_nost.pdf",
  },
  {
    id: 6,
    name_document: "Лицензия на право перевозку пассажиров и иных лиц автобусом",
    document_src: "https://dom-prestarelih.astr.socinfo.ru/media/2019/07/26/1263994797/Licenziya_na_perevozku_passazhirov.pdf",
  }

];

export default function License() {
  return (
    <div className="Document">
      <div className="document-container">
        <h3>Лицензии</h3>
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