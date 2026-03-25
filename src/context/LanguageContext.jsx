import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('vi')
  const toggle = () => setLang((l) => (l === 'vi' ? 'en' : 'vi'))
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

// Translation helper: t(translations, lang)
export function t(obj, lang) {
  return obj[lang] || obj.vi
}
