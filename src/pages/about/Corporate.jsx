import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { useLanguage } from '../../context/LanguageContext'
import { Footer } from '../../components/Footer/Footer'

const Corporate = () => {

    const { language } = useLanguage();

    const cards = [
      {
        title: language === 'en' ? 'Corporate Account' : 'Conta Corporativa',
        description:
          language === 'en'
            ? `Smart and secure mobility for modern businesses. Simplify the transportation of your employees, clients, and partners with Moozi's Corporate Account. We provide cutting-edge technology and expert support to ensure greater control, safety, and efficiency.`
            : 'Mobilidade Inteligente e Segura para Empresas Modernas. Simplifique o transporte dos seus colaboradores, clientes e parceiros com a Conta Corporativa da Moozi. Com tecnologia de ponta e suporte especializado, proporcionamos à sua empresa mais controlo, segurança e eficiência.',
      },
      {
        title: language === 'en' ? 'Why Choose Moozi?' : 'Porquê escolher a Moozi?',
        description:
          language === 'en'
            ? 'Advanced Fleet Management, Business Reports, Automated Notifications, Payment Integration, User Feedback, Ride Approvals, Budgeting, Ride Sharing, Real-Time Monitoring, Consolidated Billing.'
            : 'Gestão Avançada de Frota, Relatórios Empresariais, Notificações Automatizadas, Integração com Pagamentos, Feedback de Utilizadores, Autorização de Viagens, Orçamentos, Partilha de Viagem, Monitoramento em Tempo Real, Facturação Consolidada.',
      },
      {
        title: language === 'en' ? 'How It Works' : 'Como Funciona',
        description: (
          <ul className="space-y-1">
            <li><strong>1.</strong> {language === 'en' ? 'Account Creation' : 'Criação da Conta'}</li>
            <li><strong>2.</strong> {language === 'en' ? 'Profile & Permission Setup' : 'Configuração de Perfis e Permissões'}</li>
            <li><strong>3.</strong> {language === 'en' ? 'Define Mobility Policies' : 'Definição de Políticas de Mobilidade'}</li>
            <li><strong>4.</strong> {language === 'en' ? 'Ride Requests & Approvals' : 'Solicitação e Aprovação de Corridas'}</li>
            <li><strong>5.</strong> {language === 'en' ? 'Real-Time Trip Monitoring' : 'Monitoramento de Viagens em Tempo Real'}</li>
            <li><strong>6.</strong> {language === 'en' ? 'Billing & Reporting' : 'Facturação e Relatórios'}</li>
          </ul>
        ),
      },
      
      {
        title: language === 'en' ? 'Ideal For' : 'Para Quem é Ideal',
        description:
          language === 'en'
            ? 'SMEs, Large Corporations, Hotels, Clinics, NGOs, Logistics & Service Companies.'
            : 'PMEs, Grandes Corporações, Hotéis, Clínicas, ONGs, Empresas de Logística e Serviços.',
      },
      {
        title: language === 'en' ? 'Request Account' : 'Solicitar Conta',
        description:
          language === 'en'
            ? `Revolutionise how your company manages mobility. Contact us to learn more and experience Moozi's Corporate Account.`
            : 'Transforme a forma como a sua empresa gere mobilidade. Entre em contacto connosco para saber mais e experimente a Conta Corporativa Moozi.',
      },
    ]

  return (
    <>
    <Navbar language={language}/>

<div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
  <h2 className="text-4xl font-bold text-[#0080e2] text-center">
    {language === 'en' ? 'Corporate Account' : 'Conta Corporativa'}
  </h2>

  <div className="w-full p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="card bg-base-200 shadow-xl p-6">
            <div className="card-body">
              <h2 className="card-title text-[#0080e2]">{card.title}</h2>
              <p className="whitespace-pre-line">{card.description}</p>
              {/* {card.title === (language === 'en' ? 'Request Account' : 'Solicitar Conta') && (
                <div className="card-actions mt-4">
                  <button className="btn bg-[#0080e2] text-white">
                    {language === 'en' ? 'Create Corporate Account' : 'Criar Conta Corporativa'}
                  </button>
                  <button className="btn bg-[#0080e2] text-white">
                    {language === 'en' ? 'Request Demo' : 'Solicitar Demonstração'}
                  </button>
                </div>
              )} */}
            </div>
          </div>
        ))}
      </div>
    </div>
  

</div>

<Footer language={language}/>


    </>
  )
}

export default Corporate