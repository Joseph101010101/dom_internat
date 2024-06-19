import React from "react";
import SomeForms from "./SomeForms";
import Goszadanie from "./Goszadanie";
import Charter from "./Сharter";
import Tariffs from "./Tariffs";
import HozPlane from "./HozPlane";
import Information from "./Information";
import License from "./License";
import Union from "./Union";
import Svidetelstvo from "./Svidetelstvo";
import Pravila from "./Pravila";
import Perecen from "./Perecen";
import Anticorruption from "./Anticorruption";
import Laborprotection from "./Laborprotection";

export default function Document() {
  return (
    <div>
      <SomeForms/>
      <Goszadanie/>
      <Charter/>
      <Tariffs/>
      <HozPlane/>
      <Information/>
      <License/>
      <Union/>
      <Svidetelstvo/>
      <Pravila/>
      <Perecen/>
      <Anticorruption/>
      <Laborprotection/>
    </div>
  )
}
