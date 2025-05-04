import React from 'react'
import { useLanguage } from '../../context/LanguageContext';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';

const FAQ = () => {
    
    const { language } = useLanguage();

  return (
    <>

    <Navbar language={language} />

    <div className="p-6 max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center text-[#0080e2] mb-12 mt-18 sm:mt-0">
        {language === 'en' ? 'Passenger & Driver FAQs' : 'FAQs Passageiros e Motoristas'}
        </h2>

        {/* Passenger FAQs */}
        <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#0080e2]">
            {language === 'en' ? 'For Passengers' : 'Para Passageiros'}
        </h3>
        <ul className="space-y-4">
            <li>
            <strong>{language === 'en' ? 'How does the payment for my trip work?' : 'Como funciona o pagamento da minha viagem?'}</strong><br/>
            {language === 'en'
                ? 'Pay quickly and securely through the Moozi app. Update your profile and enjoy all available payment methods!'
                : 'Pague de forma rápida e segura através do aplicativo Moozi. Actualize o seu perfil e aproveite todas as formas de pagamento disponíveis!'}
            </li>
            <li>
            <strong>{language === 'en' ? 'What payment methods can I use?' : 'Que métodos de pagamento posso utilizar?'}</strong><br/>
            {language === 'en'
                ? 'You can pay by bank card, mobile wallet, and other electronic methods accepted on the platform. Experience the freedom to choose how you pay!'
                : 'Pode pagar com cartão bancário, carteira móvel e outros meios electrónicos aceites na plataforma. Experimente agora a liberdade de escolher como quer pagar!'}
            </li>
            <li>
            <strong>{language === 'en' ? 'Can I schedule a ride?' : 'Posso agendar uma viagem?'}</strong><br/>
            {language === 'en'
                ? 'Yes! Schedule your ride in advance through the app. Plan your mobility today with Moozi!'
                : 'Sim! Agende a sua viagem antecipadamente pela aplicação. Planeie a sua mobilidade hoje mesmo com Moozi!'}
            </li>
            <li>
            <strong>{language === 'en' ? 'How can I ensure my trip is safe?' : 'Como garantir a segurança da minha viagem?'}</strong><br/>
            {language === 'en'
                ? 'Use the PIN code, share your location in real time, and activate the SOS button. Update your security settings and travel with peace of mind!'
                : 'Utilize o PIN, partilhe a sua localização e active o botão SOS. Actualize as suas definições de segurança no app e viaje tranquilo!'}
            </li>
            <li>
            <strong>{language === 'en' ? 'Can I share my trip?' : 'Posso partilhar a minha viagem?'}</strong><br/>
            {language === 'en'
                ? 'Yes! Share your real-time trip status with family or friends. Guarantee your safety by sharing every ride!'
                : 'Sim! Partilhe o percurso em tempo real com familiares ou amigos. Garanta já a sua tranquilidade: partilhe cada viagem!'}
            </li>
        </ul>
        </div>

        {/* Driver FAQs */}
        <div>
        <h3 className="text-2xl font-semibold mt-10 mb-4 text-[#0080e2]">
            {language === 'en' ? 'For Drivers' : 'Para Motoristas'}
        </h3>
        <ul className="space-y-4">
            <li>
            <strong>{language === 'en' ? 'How do I receive payment for completed rides?' : 'Como recebo o pagamento das corridas realizadas?'}</strong><br/>
            {language === 'en'
                ? 'Payments are processed automatically through the app. Connect your bank account and start earning today!'
                : 'Receba os seus pagamentos automaticamente através do aplicativo Moozi. Conecte a sua conta bancária e comece a ganhar hoje!'}
            </li>
            <li>
            <strong>{language === 'en' ? 'How is my performance as a driver evaluated?' : 'Como funciona a avaliação do meu desempenho como motorista?'}</strong><br/>
            {language === 'en'
                ? 'After each trip, passengers can rate your service. Your ratings influence your standing as a Moozi driver. Provide excellent service and stand out!'
                : 'Após cada viagem, os passageiros avaliam o serviço. As suas avaliações influenciam a sua classificação como motorista Moozi. Preste um excelente serviço e destaque-se!'}
            </li>
            <li>
            <strong>{language === 'en' ? 'How can I track my earnings?' : 'Como acompanho os meus ganhos?'}</strong><br/>
            {language === 'en'
                ? 'Track your earnings live within your driver profile. Update your profile and monitor your earnings anytime!'
                : 'Consulte o seu perfil em tempo real e veja o seu saldo crescer. Actualize o seu perfil e acompanhe os seus ganhos a qualquer momento!'}
            </li>
        </ul>
        </div>
    </div>

    <Footer language={language} />

    </>
  )
}

export default FAQ