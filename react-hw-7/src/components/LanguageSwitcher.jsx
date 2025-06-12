import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const LanguageSwitcher = () => {
  const { toggleLanguage } = useContext(LanguageContext)

  return (
    <button onClick={toggleLanguage} className="language-button">
      Switch language
    </button>
  )
}

export default LanguageSwitcher
