import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'next-i18next';

const CookieConsentComponent = () => {
  const { t } = useTranslation("");
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="myCookieConsent"
      style={{ background: '#333' }}
      buttonStyle={{ color: '#fff', background: '#0e61fe', fontSize: '13px' }}
      expires={150}
    >
      {t('cookies.reasons')}{' '}
      <span style={{ fontSize: '10px' }}>
        {t('cookies.accept')}
      </span>
    </CookieConsent>
  );
};

export default CookieConsentComponent;