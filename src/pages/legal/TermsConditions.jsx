import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Navbar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';

const TermsConditions = () => {
  const {language} = useLanguage();

  return (
    <>
      <Navbar language={language} />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <h2 className="text-4xl font-bold text-[#0080e2] text-center">
          {language === 'en' ? 'Terms of Use' : 'Termos de Utilização'}
        </h2>

        <p className="text-sm text-center text-gray-500">
          {language === 'en' ? 'Last updated: 01/06/2025' : 'Última actualização: 01/06/2025'}
        </p>

        <div className="space-y-4">
          {language === 'en' ? (
            <>
              <p>These Terms of Use (“Terms”) govern access to and use of the Moozi and Moozi Driver apps (“the Apps”), operated by Moozi. By accessing or using the Apps, you agree to be bound by these Terms.</p>
              <h3 className="font-bold">1. Acceptance of Terms</h3>
              <ul className="list-disc list-inside">
                <li>You are at least 18 years old;</li>
                <li>You have legal capacity to accept these Terms;</li>
                <li>You have provided true and up-to-date information during registration.</li>
              </ul>
              <h3 className="font-bold">2. Purpose</h3>
              <p>Moozi provides a ride-hailing intermediation service, connecting passengers with registered drivers through its mobile applications.</p>
              <h3 className="font-bold">3. Account Creation and Management</h3>
              <ul className="list-disc list-inside">
                <li>You are responsible for maintaining the confidentiality of your account and password.</li>
                <li>You are fully responsible for all activities conducted under your account.</li>
                <li>Moozi reserves the right to suspend or delete accounts that violate these Terms or contain false information.</li>
              </ul>
              <h3 className="font-bold">4. User Obligations</h3>
              <p className="font-semibold">Passengers:</p>
              <ul className="list-disc list-inside">
                <li>Provide the correct pick-up and destination locations.</li>
                <li>Pay the fare as indicated in the app.</li>
                <li>Treat the driver with respect and good conduct.</li>
              </ul>
              <p className="font-semibold">Drivers:</p>
              <ul className="list-disc list-inside">
                <li>Comply with all legal requirements (valid driver's license, clean criminal record, PSV permit, etc.).</li>
                <li>Keep the vehicle in good technical and hygienic condition.</li>
                <li>Respect passengers and follow road safety rules.</li>
              </ul>
              <h3 className="font-bold">5. Payments and Fees</h3>
              <p>Fares are calculated based on distance, estimated time, demand, and other factors. Moozi may apply dynamic pricing. Payment methods include cash, digital wallets, and others available in the app.</p>
              <h3 className="font-bold">6. Cancellations and Penalties</h3>
              <p>Frequent or abusive cancellations may result in charges or account suspension. Passengers may be charged a cancellation fee after a certain wait time. Drivers who induce cancellations may be penalised or deactivated.</p>
              <h3 className="font-bold">7. Suspension and Account Termination</h3>
              <p>Moozi reserves the right to suspend or terminate the account of any user who violates these Terms, commits fraud, or consistently receives negative ratings.</p>
              <h3 className="font-bold">8. Responsibilities</h3>
              <p>Moozi acts solely as an intermediary and is not a party to the transportation contract. Moozi is not liable for damages resulting from the use of the Apps or third-party services.</p>
              <h3 className="font-bold">9. Data Protection</h3>
              <p>Data processing is governed by our Privacy Policy. Collected data will be used for service execution, safety, and user experience improvement.</p>
              <h3 className="font-bold">10. Intellectual Property</h3>
              <p>All intellectual property rights over the content and design of the Apps belong to Moozi, unless otherwise stated.</p>
              <h3 className="font-bold">11. Changes to Terms</h3>
              <p>Moozi may amend these Terms at any time. Any changes will be communicated through the app or other appropriate means.</p>
              <h3 className="font-bold">12. Contact</h3>
              <p>📞 +258 84 258 0258</p>
              <p>📧 suporte@moozi.co.mz</p>
            </>
          ) : (
            <>
              <p>Estes Termos de Utilização (“Termos”) regulam o acesso e uso da aplicação Moozi e Moozi Driver (“as Aplicações”), operadas pela Moozi. Ao aceder ou utilizar as Aplicações, o utilizador concorda em vincular-se a estes Termos.</p>
              <h3 className="font-bold">1. Aceitação dos Termos</h3>
              <ul className="list-disc list-inside">
                <li>Tem, no mínimo, 18 anos de idade;</li>
                <li>Possui capacidade legal para aceitar estes Termos;</li>
                <li>Forneceu informações verdadeiras e actualizadas durante o registo.</li>
              </ul>
              <h3 className="font-bold">2. Objecto</h3>
              <p>A Moozi oferece um serviço de intermediação de transporte privado, conectando passageiros a motoristas registados, através das suas Aplicações móveis.</p>
              <h3 className="font-bold">3. Criação e Gestão de Conta</h3>
              <ul className="list-disc list-inside">
                <li>O utilizador é responsável por manter a confidencialidade da sua conta e palavra-passe.</li>
                <li>Toda a actividade realizada sob a sua conta será da sua inteira responsabilidade.</li>
                <li>A Moozi reserva-se o direito de suspender ou eliminar contas que violem estes Termos ou que contenham informações falsas.</li>
              </ul>
              <h3 className="font-bold">4. Obrigações dos Utilizadores</h3>
              <p className="font-semibold">Passageiros:</p>
              <ul className="list-disc list-inside">
                <li>Fornecer o local correcto de partida e destino.</li>
                <li>Pagar o valor da viagem conforme indicado na aplicação.</li>
                <li>Manter o respeito e boa conduta para com o motorista.</li>
              </ul>
              <p className="font-semibold">Motoristas:</p>
              <ul className="list-disc list-inside">
                <li>Cumprir com todos os requisitos legais exigidos pelas autoridades competentes (carta de condução válida, registo criminal limpo, licença PSV, etc.).</li>
                <li>Manter o veículo em boas condições técnicas e de higiene.</li>
                <li>Respeitar os passageiros e seguir os princípios de segurança rodoviária.</li>
              </ul>
              <h3 className="font-bold">5. Pagamentos e Tarifas</h3>
              <p>O valor da viagem será calculado com base em critérios como distância, tempo estimado, procura, entre outros. A Moozi poderá aplicar preços dinâmicos. Métodos de pagamento incluem dinheiro, carteira digital e outros meios disponibilizados pela Aplicação.</p>
              <h3 className="font-bold">6. Cancelamentos e Penalizações</h3>
              <p>Cancelamentos frequentes ou abusivos podem resultar em taxas ou suspensão de conta. O passageiro poderá ser cobrado por cancelamento após determinado tempo de espera. O motorista que induzir o cancelamento poderá ser penalizado ou desactivado.</p>
              <h3 className="font-bold">7. Suspensão e Encerramento da Conta</h3>
              <p>A Moozi reserva-se o direito de suspender ou encerrar a conta de qualquer utilizador que viole estes Termos, pratique actos fraudulentos ou receba avaliações persistentemente negativas.</p>
              <h3 className="font-bold">8. Responsabilidades</h3>
              <p>A Moozi actua apenas como intermediário entre passageiros e motoristas, não sendo parte do contrato de transporte. A Moozi não se responsabiliza por danos directos ou indirectos decorrentes do uso das Aplicações ou da prestação do serviço por terceiros.</p>
              <h3 className="font-bold">9. Protecção de Dados</h3>
              <p>O tratamento de dados pessoais está regulado pela nossa Política de Privacidade. Os dados recolhidos serão utilizados para a execução dos serviços, segurança e melhoria da experiência do utilizador.</p>
              <h3 className="font-bold">10. Propriedade Intelectual</h3>
              <p>Todos os direitos de propriedade intelectual sobre o conteúdo e design das Aplicações pertencem à Moozi, salvo indicação em contrário.</p>
              <h3 className="font-bold">11. Alterações aos Termos</h3>
              <p>A Moozi poderá alterar estes Termos a qualquer momento. Quaisquer alterações serão comunicadas através da aplicação ou outros meios adequados.</p>
              <h3 className="font-bold">12. Contactos</h3>
              <p>📞 +258 84 258 0258</p>
              <p>📧 suporte@moozi.co.mz</p>
            </>
          )}
        </div>
      </div>

      <Footer language={language} />
    </>
  );
};

export default TermsConditions;