import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useLanguage } from '../../context/LanguageContext'
import { Footer } from '../../components/Footer/Footer';

import './ClientPage.css'; // Import your CSS file for styling

const ClientPage = () => {

    const { language } = useLanguage();

  return (
    <>
    <Navbar language={language} />
    <div className="client-container max-w-4xl mx-auto p-6 space-y-10">
  <h1 className="text-3xl text-[#0080e2] font-bold text-center">
    {language === 'en' ? 'Ride with Moozi' : 'Viaja com a Moozi'}
  </h1>

  {/* Section 1 */}
  <section className="space-y-4">
    <h2 className="text-xl text-[#0080e2] font-semibold">
      {language === 'en'
        ? 'Your Journey Starts Here'
        : 'A tua viagem começa aqui'}
    </h2>
    <p>
      {language === 'en'
        ? `Moozi is more than a mobility app. It’s a new way to move through the city with safety, comfort, and fair prices. We created a platform designed to offer you a smooth, modern, and reliable experience — from the moment you request a ride until you reach your destination.

Download the Moozi app, sign up, and discover a new way to travel the city!`
        : `A Moozi é mais do que uma aplicação de mobilidade. É uma nova forma de te moveres pela cidade com segurança, conforto e preços justos. Criámos uma plataforma pensada para te oferecer uma experiência simples, moderna e confiável — do momento em que pedes uma viagem até à chegada ao teu destino.

Descarrega a app Moozi, regista-te e experimenta uma nova forma de viajar pela cidade!`}
    </p>
  </section>

  {/* Section 2 */}
  <section className="space-y-4">
    <h2 className="text-xl text-[#0080e2] font-semibold">
      {language === 'en'
        ? 'Fair and Attractive Pricing'
        : 'Preços Atractivos e Justos'}
    </h2>
    <p>
      {language === 'en'
        ? `With Moozi, you pay a fair price for every ride. We use technology to calculate real-time rates based on distance, time, and traffic. We also offer regular promotions and discount codes to help you save even more.`
        : `Com a Moozi, pagas um valor justo por cada viagem. Usamos tecnologia para calcular tarifas em tempo real, com base na distância, tempo e condições do trânsito. Lançamos promoções frequentes e códigos de desconto para que possas economizar ainda mais.`}
    </p>
  </section>

  {/* Section 3 */}
  <section className="space-y-4">
    <h2 className="text-xl text-[#0080e2] font-semibold">
      {language === 'en'
        ? 'Safety: Our Commitment'
        : 'Segurança: o nosso compromisso'}
    </h2>
    <ul className="list-disc list-inside space-y-1">
      {language === 'en' ? (
        <>
          <li>SOS button for emergencies</li>
          <li>Real-time trip sharing</li>
          <li>Emergency Contacts List</li>
          <li>Strict driver verification process</li>
          <li>Security PIN before starting the ride</li>
          <li>Driver and vehicle identification</li>
          <li>Mutual rating system after each ride</li>
          <li>24/7 dedicated support via WhatsApp</li>
        </>
      ) : (
        <>
          <li>Botão SOS para emergências</li>
          <li>Partilha de viagem em tempo real</li>
          <li>Lista de Contactos de Emergência</li>
          <li>Verificação rigorosa de motoristas</li>
          <li>PIN de segurança antes de iniciar a viagem</li>
          <li>Identificação do motorista e do veículo</li>
          <li>Avaliação mútua após a viagem</li>
          <li>Apoio dedicado 24/7 via WhatsApp</li>
        </>
      )}
    </ul>
  </section>

  {/* Section 4 */}
  <section className="space-y-4">
    <h2 className="text-xl text-[#0080e2] font-semibold">
      {language === 'en'
        ? 'More Reasons to Choose Moozi'
        : 'Mais Motivos para escolher a Moozi'}
    </h2>
    <ul className="list-disc list-inside space-y-1">
      {language === 'en' ? (
        <>
          <li>Lightweight, fast, and easy-to-use app</li>
          <li>Ride types: Classic, Deluxe, and Moozi Ela</li>
          <li>Payment via M-Pesa, cash or Moozi balance</li>
          <li>Exclusive campaigns and vouchers</li>
          <li>Social responsibility and inclusion</li>
          <li>Schedule trips in advance</li>
          <li>Request rides for other people</li>
        </>
      ) : (
        <>
          <li>Aplicação leve, rápida e fácil de usar</li>
          <li>Categorias: Clássico, Deluxe e Moozi Ela</li>
          <li>Pagamento com M-Pesa, numerário ou saldo Moozi</li>
          <li>Campanhas e vouchers exclusivos</li>
          <li>Responsabilidade social e inclusão</li>
          <li>Agendamento de viagens com antecedência</li>
          <li>Solicita viagens para outras pessoas</li>
        </>
      )}
    </ul>
  </section>
</div>

<Footer language={language} />

    
    </>
  )
}

export default ClientPage