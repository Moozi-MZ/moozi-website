import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { Navbar } from '../../components/Navbar/Navbar'
import { useLanguage } from '../../context/LanguageContext';
import './DriverPage.css';

import { Link } from 'react-router-dom';

const DriverPage = () => {

    const { language } = useLanguage();

    const handleRedirect = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("android")) {
      window.open('https://play.google.com/store/apps/details?id=com.moozi.driver', '_blank');
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      window.open('https://apps.apple.com/ie/app/moozi-driver/id6743934988', '_blank');
    } else {
        window.open('https://moozi.co.mz', '_blank');
    }
  };

  return (
    <>
    <Navbar language={language} />
    <div className="driver-container max-w-4xl mx-auto p-6 space-y-10">
  <h1 className="text-3xl text-[#0080e2] font-bold text-center">
    {language === 'en' ? 'Become a Moozi Driver' : 'Quero Ser Motorista Moozi'}
  </h1>

  {/* Introduction */}
  <section className="space-y-4">
    <h2 className="text-xl text-[#0080e2] font-semibold">
      {language === 'en' ? 'Introduction' : 'Introdução'}
    </h2>
    <p>
      {language === 'en'
        ? `Are you looking for an opportunity to earn money with flexibility, freedom, and support from a team that cares about you? At Moozi, we turn every ride into a chance to grow. With a modern, fair, and inclusive approach, we value every driver as a key part of our mission.

Join Moozi and start transforming your daily routine today.`
        : `Estás à procura de uma oportunidade para ganhar dinheiro com flexibilidade, liberdade e apoio de uma equipa que se preocupa contigo? Na Moozi, transformamos cada viagem numa oportunidade de crescimento. Com uma abordagem moderna, justa e inclusiva, valorizamos cada motorista como parte essencial da nossa missão.

Junta-te à Moozi e começa hoje a transformar o teu dia a dia.`}
    </p>
  </section>

  <div className='moozi-driver-button' onClick={handleRedirect}>
    <h1>Baixe o Moozi Driver</h1>
  </div>

  {/* Requirements */}
  <section className="space-y-4">
    <h2 className="text-xl text-[#0080e2] font-semibold">
      {language === 'en' ? 'Driver Requirements' : 'Requisitos para Cadastro'}
    </h2>
    <ul className="list-disc list-inside space-y-1">
      {language === 'en' ? (
        <>
          <li>Minimum age: 21 years</li>
          <li>Valid Driver’s License (Category B or higher)</li>
          <li>Vehicle document (ownership or legal authorization)</li>
          <li>Valid and updated criminal record</li>
          <li>Mobile phone with internet access</li>
          <li>Bank or M-Pesa account in driver’s name</li>
        </>
      ) : (
        <>
          <li>Idade mínima de 21 anos</li>
          <li>Carta de Condução válida (Categoria B ou superior)</li>
          <li>Documento do veículo (propriedade ou autorização legal)</li>
          <li>Registo criminal válido e atualizado</li>
          <li>Telemóvel com acesso à internet</li>
          <li>Conta bancária ou M-Pesa em nome do motorista</li>
        </>
      )}
    </ul>
  </section>

  {/* Benefits */}
  <section className="space-y-4">
    <h2 className="text-xl text-[#0080e2] font-semibold">
      {language === 'en'
        ? 'Benefits of Being a Moozi Driver'
        : 'Vantagens de Ser Motorista Moozi'}
    </h2>
    <ul className="list-disc list-inside space-y-1">
      {language === 'en' ? (
        <>
          <li>Fast and transparent payments</li>
          <li>Flexible working hours</li>
          <li>Weekly campaigns and bonuses</li>
          <li>Dedicated support</li>
          <li>User-friendly platform</li>
        </>
      ) : (
        <>
          <li>Pagamentos rápidos e transparentes</li>
          <li>Horários flexíveis</li>
          <li>Campanhas e Bónus semanais</li>
          <li>Apoio dedicado</li>
          <li>Plataforma intuitiva</li>
        </>
      )}
    </ul>
  </section>


  <section className="space-y-4">
    <h2 className="text-l font-semibold">
      {language === 'en'
        ? 'To become a Moozi driver contact:'
        : 'Para se tornar um motorista Moozi, entre em contacto com:'}
    </h2>
    <ul className="list-disc list-inside space-y-1">
      <u><a href='mailto:cadastro@moozi.co.mz'>Cadastro@moozi.co.mz</a></u>
    </ul>
  </section>

  

  {/* Vehicle Categories */}
  <Link to='/moozi-website/vehicle-category' className="driver-slide-container max-w-70 relative flex items-center px-6 py-2 rounded-full bg-[#0080e2] text-black font-medium overflow-hidden transition-all hover:brightness-105">
  <span className=" driver-slide absolute left-2 h-8 flex items-center justify-center bg-white text-white rounded-full">
  </span>
   <span className='text-white'>→</span>
  <span className="ml-8 text-white">
    {language == 'en' ? `Vehicle Category` : `Categoria de Veículos`}
  </span>
</Link>



</div>
<Footer language={language} />
    
    </>
  )
}

export default DriverPage