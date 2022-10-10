import React from 'react'
import useDarkMode from '../../hooks/useDarkMode';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const {t, i18n} = useTranslation()
  const test =()=>{
    toggleDarkMode(!isDarkMode);
  }
  const switchLang =()=>{
    localStorage.setItem("language", 'vn');
    i18n.changeLanguage(localStorage.getItem("language"))
  }
  return (
    <div>
      <button type="button" onClick={test} >Click Me!</button>
      <button type="button" onClick={switchLang} >switch</button>
      
    </div>
  );
}

export default Header