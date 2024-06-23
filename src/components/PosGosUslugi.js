import React, { useState } from 'react';

function Widget(src, opaId, isFz59) {
  const ACTION_ID = 'js-show-iframe-wrapper';
  const BLOCK_ACTION_CLASS = 'pos-block-action';

  let fz59 = isFz59 ? 'true' : 'false';
  src += '?opaId=' + opaId + '&fz59=' + fz59;

  let div = document.createElement('div');
  let header = document.createElement('header');
  let overlay = document.createElement('div');
  let body = document.getElementsByTagName('body')[0];

  //  css
  div.style.background = 'white';
  div.style.position = 'fixed';
  div.style.maxWidth = '620px';
  div.style.maxHeight = '768px';
  div.style.margin = 'auto';
  div.style.top = '0';
  div.style.bottom = '0';
  div.style.left = '0';
  div.style.right = '0';
  div.style.zIndex = '999999999';

  overlay.style.position = 'fixed';
  overlay.style.zIndex = '999999998';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.backgroundColor = 'rgba(0,0,0,.3)';

  // attr
  div.setAttribute('id', 'js-iframe-wrapper');
  overlay.setAttribute('id', 'js-iframe-overlay');
  let iframe = document.createElement('iframe');

  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = '0';

  iframe.setAttribute('src', src);
  iframe.setAttribute('id', 'js-iframe-widget');
  iframe.referrerPolicy = 'unsafe-url';

  div.appendChild(iframe);
  header.innerHTML = 'Новое обращение';

  function destroy() {
    let body = document.getElementsByTagName('body')[0];
    let wOverlay = document.getElementById('js-iframe-overlay');
    let wWrapper = document.getElementById('js-iframe-wrapper');
    wWrapper && body.removeChild(wWrapper);
    wOverlay && body.removeChild(wOverlay);
  }

  function create() {
    body.appendChild(div);
    body.appendChild(overlay);
  }

  function closeWidget() {
    destroy();
  }

  function showWidget() {
    create();
  }

  const openWidgetBtn = document.getElementById(ACTION_ID);

  if (openWidgetBtn) {
    openWidgetBtn.addEventListener('click', function (e) {
      e.preventDefault();
      showWidget();
    });

    openWidgetBtn.addEventListener('touchend', function (e) {
      if (!document.getElementById(ACTION_ID).classList.contains(BLOCK_ACTION_CLASS)) {
        showWidget();
      } else {
        setTimeout(function () {
          document.getElementById(ACTION_ID).classList.remove(BLOCK_ACTION_CLASS);
        }, 0);
      }
    });

    openWidgetBtn.addEventListener('touchmove', function (e) {
      document.getElementById(ACTION_ID).classList.add(BLOCK_ACTION_CLASS); // предотвращаем экшен при скролле на лаптопах
    });
  }

  window.addEventListener('message', function (event) {
    if (event.data.close) {
      closeWidget();
    }
  }, false);

  // переопределяем слоган
  (function overrideSlogan() {
    const posBanner = document.getElementById(ACTION_ID);
    const posButton = posBanner.querySelector('.bf-1 .pos-banner-btn_2') || posBanner.querySelector('.bf-2 .pos-banner-btn_2');
    
    if (posBanner) {
      const sloganTag = posBanner.querySelector('.bf-1__slogan') || posBanner.querySelector('.bf-2__slogan');

      if (sloganTag) {
        sloganTag.innerHTML = 'Решаем вместе';
      }
      
      if(posButton){
        posButton.innerHTML = 'Сообщить о проблеме';
        posButton.style.width = '240px';
      }
    }
  })();
}

function ReportIssueBanner() {
  const [issueDescription, setIssueDescription] = useState('');
  const [issueType, setIssueType] = useState('');
  const [showWidget, setShowWidget] = useState(false);

  const handleIssueDescriptionChange = (event) => {
    setIssueDescription(event.target.value);
  };

  const handleIssueTypeChange = (event) => {
    setIssueType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setShowWidget(true);
    Widget("https://pos.gosuslugi.ru/form", 239798, false);
  };

  return (
    <div id="js-show-iframe-wrapper">
      <div className="pos-banner-fluid bf-2">
        <div className="bf-2__decor">
          <div className="bf-2__logo-wrap">
            <img src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo.svg" className="bf-2__logo" alt="Госуслуги" />
            <div className="bf-2__slogan">
              Решаем вместе
            </div>
          </div>
        </div>
        <div className="bf-2__content">
          <div className="bf-2__description">
            <span className="bf-2__text">Не убран мусор, яма на дороге, не горит фонарь?</span>
            <span className="bf-2__text bf-2__text_small">Столкнулись с проблемой — сообщите о ней!</span>
          </div>
          <div className="bf-2__btn-wrap">
            <button
              className="pos-banner-btn_2"
              type="button"
              style={{ width: '240px' }}
              onClick={handleSubmit}
            >
              Сообщить о проблеме
            </button>
          </div>
        </div>
      </div>
      {showWidget && (
        <div>
          {/* Виджет будет отображаться здесь */}
        </div>
      )}
    </div>
  );
}

export default ReportIssueBanner;