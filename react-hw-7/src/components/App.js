import React from 'react';
import { LanguageProvider } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import TextDisplay from './TextDisplay';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <TextDisplay />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;
