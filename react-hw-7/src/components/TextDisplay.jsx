import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const TextDisplay = () => {
  const { language } = useContext(LanguageContext)

  return (
    <h1>
      {language === 'en'
        ? 'English language was chosen'
        : 'Deutsche Sprache wurde gewählt'}
    </h1>
  )
}

export default TextDisplay
