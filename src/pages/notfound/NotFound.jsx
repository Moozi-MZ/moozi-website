import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

const NotFound = () => {

    const { language } = useLanguage();


  return (
    <>
    <Navbar language={language} />

    <div className="flex flex-col items-center justify-center h-150 text-center p-6 space-y-6">
      <h1 className="text-7xl font-bold text-[#0080e2]">404</h1>
      <p className="text-2xl font-semibold">
        {language === 'en'
          ? 'Page Not Found'
          : 'Página Não Encontrada'}
      </p>
      <p className="text-lg max-w-xl">
        {language === 'en'
          ? 'Looks like you’ve taken a wrong turn. Don’t worry, it happens! Let’s get you back on track.'
          : 'Parece que seguiste o caminho errado. Não te preocupes, acontece! Vamos voltar ao ponto de partida.'}
      </p>
      <div>
      <Link to="/" className="btn btn-[#0080e2]">
        {language === 'en' ? 'Return Home' : 'Voltar à Página Inicial'}
      </Link>

      </div>
    </div>

    <Footer language={language} />
    </>
  )
}

export default NotFound