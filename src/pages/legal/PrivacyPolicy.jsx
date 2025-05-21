import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';
import { useLanguage } from '../../context/LanguageContext';

const PrivacyPolicy = () => {
  const {language} = useLanguage();

  return (
    <>
      <Navbar language={language} />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h1 className="text-3xl font-bold text-[#0080e2] text-center">
          {language == 'en' ? 'Privacy Policy' : 'Política de Privacidade'}
        </h1>
        <p className="text-sm text-gray-500 text-center">
          {language === 'en' ? 'Last updated: 01/06/2025' : 'Data de actualização: 01/06/2025'}
        </p>

        <div className="space-y-4">
          <p>
            {language === `en`
              ? 'Moozi operates the Moozi and Moozi Driver apps (“the Apps”). This page informs you of our policies regarding the collection, use, and disclosure of personal information received from users of the Apps.'
              : 'A Moozi opera as aplicações Moozi e Moozi Driver (“as Aplicações”). Esta página informa sobre as nossas políticas relativas à recolha, uso e divulgação de informações pessoais recebidas dos utilizadores das Aplicações.'}
          </p>

          <p>
            {language === 'en'
              ? 'We use your personal information solely to provide and improve our services.'
              : 'Utilizamos as informações pessoais apenas para fornecer e melhorar os nossos serviços.'}
          </p>

          <p>
            {language === 'en'
              ? 'By using the Apps, you agree to the collection and use of information in accordance with this policy.'
              : 'Ao utilizar as Aplicações, concorda com a recolha e uso das informações de acordo com esta política.'}
          </p>

          <h2 className="text-2xl font-semibold text-[#0080e2]">
            {language === 'en' ? 'Information Collection & Use' : 'Recolha e Utilização de Informações'}
          </h2>

          <p>
            {language === 'en'
              ? 'While using our Apps, we may ask you to provide certain personally identifiable information, including but not limited to:'
              : 'Durante a utilização das nossas Aplicações, poderemos solicitar dados pessoais identificáveis, como:'}
          </p>
          <ul className="list-disc list-inside">
            {[
              language === 'en' ? 'Name' : 'Nome',
              language === 'en' ? 'Phone number' : 'Número de telefone',
              language === 'en' ? 'Email address' : 'Endereço de correio electrónico',
              language === 'en' ? 'Profile photo' : 'Fotografia de perfil',
              language === 'en' ? 'Gender' : 'Género',
              language === 'en' ? `Driver's license` : 'Carta de condução',
              language === 'en' ? 'Criminal record certificate' : 'Certificado de Registo Criminal',
              language === 'en' ? 'PSV card' : 'Cartão PSV',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p>
            {language === 'en'
              ? 'We collect this information for:'
              : 'As informações são recolhidas para:'}
          </p>
          <ul className="list-disc list-inside">
            {[
              language == 'en' ? 'Service delivery' : 'Prestação dos nossos serviços',
              language === 'en' ? 'User security and integrity' : 'Segurança e integridade dos utilizadores',
              language === 'en' ? 'Customer support' : 'Apoio ao cliente',
              language === 'en' ? 'Research and development' : 'Pesquisa e desenvolvimento',
              language === 'en' ? 'User communication' : 'Comunicação entre utilizadores',
              language === 'en' ? 'Marketing and advertising' : 'Marketing e publicidade',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-[#0080e2]">
            {language === 'en' ? 'Summary of Data Usage' : 'Sumário do Uso de Dados'}
          </h2>
          <ul className="list-decimal list-inside space-y-1">
            {[
              language === 'en' ? 'Service Delivery' : 'Prestação de Serviços',
              language === 'en' ? 'Security and Integrity' : 'Segurança e Integridade',
              language === 'en' ? 'Customer Support' : 'Apoio ao Cliente',
              language === 'en' ? 'Research and Development' : 'Pesquisa e Desenvolvimento',
              language === 'en' ? 'User Communication' : 'Comunicação entre Utilizadores',
              language === 'en' ? 'Marketing and Advertising' : 'Marketing e Publicidade',
            ].map((item, index) => (
              <li key={index}> {item}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold text-[#0080e2]">
            {language === 'en' ? 'Background Location' : 'Localização em Segundo Plano'}
          </h2>
          <p>
            {language === 'en'
              ? 'The Moozi Driver app requires continuous location updates even in the background to ensure a quick response to ride requests.'
              : 'A aplicação Moozi Driver requer a actualização contínua da localização do condutor, mesmo quando a aplicação está em segundo plano, para garantir uma resposta rápida aos pedidos de viagem.'}
          </p>

          <h2 className="text-2xl font-semibold text-[#0080e2]">{language === 'en' ? 'Communications' : 'Comunicações'}</h2>
          <p>
            {language === 'en'
              ? 'We may use your personal data to send newsletters, promotional notifications, and relevant communications about the Apps.'
              : 'Poderemos usar os dados pessoais para enviar newsletters, notificações promocionais e comunicações relevantes sobre as Aplicações.'}
          </p>

          <h2 className="text-2xl font-semibold text-[#0080e2]">Cookies</h2>
          <p>
            {language === 'en'
              ? 'We use cookies to improve user experience. You can configure your browser to refuse cookies, but this may limit some functionality.'
              : 'Utilizamos cookies para melhorar a experiência do utilizador. O utilizador pode configurar o seu navegador para recusar cookies. No entanto, isso pode limitar algumas funcionalidades das Aplicações.'}
          </p>

          <h2 className="text-2xl font-semibold text-[#0080e2]">{language === 'en' ? 'Security' : 'Segurança'}</h2>
          <p>
            {language === 'en'
              ? 'We make reasonable efforts to protect personal data, but no system is 100% secure. The security of your data is important to us, but we cannot guarantee complete protection.'
              : 'Empreendemos esforços razoáveis para proteger os dados pessoais, mas nenhum sistema é 100% seguro. A segurança dos seus dados é importante para nós, mas não podemos garantir total protecção.'}
          </p>

          <h2 className="text-2xl font-semibold text-[#0080e2]">
            {language === 'en' ? 'Policy Updates' : 'Alterações a esta Política'}
          </h2>
          <p>
            {language === 'en'
              ? 'This policy is effective from 17/10/2023. We reserve the right to update it at any time. Significant changes will be notified by email or in-app notice.'
              : 'Esta Política é efectiva desde 17/10/2023. Reservamo-nos o direito de a actualizar a qualquer momento. Mudanças significativas serão notificadas por e-mail ou através de aviso nas Aplicações.'}
          </p>

          <h2 className="text-2xl font-semibold text-[#0080e2]">{language === 'en' ? 'Contact' : 'Contactos'}</h2>
          <p>
            {language === 'en'
              ? 'For questions about this Privacy Policy, contact us:'
              : 'Para dúvidas sobre esta Política de Privacidade, contacte-nos:'}
          </p>
          <ul className="list-none">
            <li>📞 +258 84 258 0258</li>
            <li>📧 Suporte@moozi.co.mz</li>
          </ul>
        </div>
      </div>

      <Footer language={language} />
    </>
  );
};

export default PrivacyPolicy;
