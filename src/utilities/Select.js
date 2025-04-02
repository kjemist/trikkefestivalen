import React, { useState, useEffect } from 'react';
import { EuiSelect, useGeneratedHtmlId } from '@elastic/eui';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
export default () => {
    const {i18n, t } = useTranslation(["common"])
    const options = [
        { value: 'en', text: t('English') },
        { value: 'no', text: t('Norsk') },
      ];
  const [value, setValue] = useState(options[0].value);
  
  const basicSelectId = useGeneratedHtmlId({ prefix: 'basicSelect' });
  useEffect(()=>{
    if(localStorage.getItem("i18nextLng")?.length >2){
     i18next.changeLanguage("en")
     
    }
    switch (localStorage.getItem("i18nextLng") ) {
      case 'no':
        setValue(options[1].value)
        break;
       
      default:setValue(options[0].value)
        ;
    }

   })
  const onChange = (e) => {
    setValue(e.target.value)
    i18n.changeLanguage(e.target.value);
    
  };
 
  return (
    /* DisplayToggles wrapper for Docs only */
      <EuiSelect
        id={basicSelectId}
        options={options}
        value={value}
        onChange={(e) => onChange(e)}
        aria-label="Use aria labels when no actual label is in use"
        className='selectLanguage'
        placeholder='Select Language'
      />
  
  );
};