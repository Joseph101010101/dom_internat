import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SomeForms from "./SomeForms";

export default function Svidetelstvo() {
  const [documentData, setDocumentData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = new URL('https://66759acaa8d2b4d072f0c256.mockapi.io/documents');
    url.searchParams.append('type', 'svidetelstvo');

    axios.get(url, {
      method: 'GET',
      headers: {'content-type':'application/json'},
    })
      .then((response) => {
        setDocumentData(response.data);
        setFilteredData(response.data.filter((item) => item.type === 'svidetelstvo'));
      })
      .catch((error) => {
        setError(error);
        console.error(error);
      });
  }, []);

  if (error) {
    return (
      <div>
        <h2>Error: {error.message}</h2>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="Document">
      <div className="document-container">
        <h3>Свидетельство о постановке на учет в налоговом органе</h3>
        <div className="document-place">
          {filteredData.map((item) => (
            <div key={item.id} className="document-item-box">
              <div className="document-item">
                <a className="a-news" href={item.document_src}>{item.name_document}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}