import React, {useEffect} from 'react';
import { Navbar } from '../../components/Navbar/Navbar'
import { useLanguage } from '../../context/LanguageContext'
import { Footer } from '../../components/Footer/Footer';

const About = () => {
    const { language } = useLanguage();

    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar language={language} />

    <div className="min-h-screen bg-white text-black py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-[#0080e2] mb-12 mt-18 sm:mt-0">
          {language === 'en' ? 'Moozi – Complete Corporate Identity' : 'Moozi – Identidade Corporativa Completa'}
        </h1>
        
        {/* Mission, Vision, Purpose, Corporate Values */}
        <div className="space-y-10">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0080e2] mb-4">{language === 'en' ? 'Mission' : 'Missão'}</h2>
            <p className="text-base">
              {language === 'en' 
                ? 'Provide advanced urban mobility solutions, ensuring safe, efficient, and reliable journeys that enhance people\'s daily lives, create sustainable opportunities for drivers, and drive progress in local communities.'
                : 'Disponibilizar soluções avançadas de mobilidade urbana, assegurando viagens seguras, eficientes e fiáveis que melhorem o quotidiano das pessoas, criem oportunidades sustentáveis para motoristas e impulsionem o progresso das comunidades locais.'
              }
            </p>
          </section>

          {/* Vision */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0080e2] mb-4">{language === 'en' ? 'Vision' : 'Visão'}</h2>
            <p className="text-base">
              {language === 'en' 
                ? 'To become the leading urban mobility platform in Mozambique, recognized for excellence in customer service, continuous technological innovation, and significant positive impact on social inclusion and economic development in the communities we serve.'
                : 'Ser a principal plataforma de mobilidade urbana em Moçambique, reconhecida pela excelência no atendimento ao cliente, pela inovação tecnológica contínua e pelo impacto significativo na inclusão social e no desenvolvimento económico das comunidades onde operamos.'
              }
            </p>
          </section>

          {/* Purpose */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0080e2] mb-4">{language === 'en' ? 'Purpose' : 'Propósito'}</h2>
            <p className="text-base">
              {language === 'en' 
                ? 'Connect people and communities through intelligent urban mobility solutions, facilitating access to safe, efficient, and inclusive transportation that promotes sustainable socioeconomic growth.'
                : 'Conectar pessoas e comunidades através de soluções inteligentes de mobilidade urbana, facilitando o acesso a transporte seguro, eficiente e inclusivo, que promova o crescimento socioeconómico sustentável.'
              }
            </p>
          </section>

          {/* Corporate Values */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0080e2] mb-4">{language === 'en' ? 'Corporate Values' : 'Valores Corporativos'}</h2>
            <div className="space-y-4">
                {[
                { 
                    en: 'Safety and Reliability', 
                    pt: 'Segurança e Fiabilidade', 
                    desc_en: 'We ensure maximum safety on every journey through advanced technology, rigorous driver verification processes, and constant attention to user well-being.',
                    desc_pt: 'Garantimos máxima segurança em cada viagem, utilizando tecnologia avançada, processos rigorosos de verificação dos motoristas e atenção constante ao bem-estar dos utilizadores.'
                },
                { 
                    en: 'Customer-Centric Excellence', 
                    pt: 'Excelência Centrada no Cliente', 
                    desc_en: 'We strive for excellence in every interaction, delivering friendly, comfortable, and personalized service tailored to the specific needs of our customers.',
                    desc_pt: 'Procuramos excelência em cada interação, oferecendo atendimento amigável, confortável e personalizado, adaptado às necessidades específicas dos nossos clientes.'
                },
                { 
                    en: 'Smart and Sustainable Innovation', 
                    pt: 'Inovação Inteligente e Sustentável', 
                    desc_en: 'We implement advanced and sustainable technologies to foster smart mobility that reduces environmental impact and continuously enhances the user experience.',
                    desc_pt: 'Implementamos tecnologias avançadas e sustentáveis para promover uma mobilidade inteligente que reduz o impacto ambiental e melhora continuamente a experiência dos utilizadores.'
                },
                { 
                    en: 'Transparency and Ethics', 
                    pt: 'Transparência e Ética', 
                    desc_en: 'We maintain transparent, clear, and ethical communication in all interactions, building trust and fostering strong, lasting relationships.',
                    desc_pt: 'Mantemos comunicação transparente, clara e ética em todas as interações, construindo confiança e promovendo relações sólidas e duradouras.'
                },
                { 
                    en: 'Inclusion, Diversity, and Cultural Respect', 
                    pt: 'Inclusão, Diversidade e Respeito Cultural', 
                    desc_en: 'We actively promote inclusion, diversity, and equality, respecting and valuing local cultural specificities and creating accessible opportunities for all, with special emphasis on empowering women and youth.',
                    desc_pt: 'Promovemos activamente a inclusão, diversidade e igualdade, valorizando e respeitando as especificidades culturais locais, criando oportunidades acessíveis para todos, com especial ênfase no empoderamento de mulheres e jovens.'
                },
                { 
                    en: 'Social Responsibility with Community Impact', 
                    pt: 'Responsabilidade Social com Impacto Comunitário', 
                    desc_en: 'We actively contribute to the socioeconomic development of communities through concrete initiatives and sustainable practices, generating direct and measurable benefits in the regions where we operate.',
                    desc_pt: 'Contribuímos activamente para o desenvolvimento socioeconómico das comunidades através de iniciativas concretas e práticas sustentáveis, gerando benefícios directos e mensuráveis nas regiões onde operamos.'
                }
                ].map((item, idx) => (
                <div key={idx} className="text-base">
                    <strong>{language === 'en' ? item.en : item.pt}</strong>
                    <p>{language === 'en' ? item.desc_en : item.desc_pt}</p>
                </div>
                ))}
            </div>
            </section>


          {/* Moozi Commitments */}
          <section>
            <h2 className="text-2xl font-semibold text-[#0080e2] mb-4">{language === 'en' ? 'Moozi Commitments' : 'Compromissos Moozi'}</h2>
            <ul className="list-disc pl-6 space-y-2 text-base">
              {[
                language === 'en' ? 'Ensure quality and consistency in all services provided.' : 'Garantir qualidade e consistência em todos os serviços prestados.',
                language === 'en' ? 'Provide a safe, comfortable, and welcoming environment for all users.' : 'Proporcionar um ambiente seguro, confortável e acolhedor a todos os utilizadores.',
                language === 'en' ? 'Continuously invest in the training and development of drivers and employees.' : 'Investir continuamente na formação e desenvolvimento dos motoristas e colaboradores.',
                language === 'en' ? 'Implement initiatives that promote local economic development.' : 'Implementar iniciativas que promovam o desenvolvimento económico local.',
                language === 'en' ? 'Adopt sustainable practices that significantly reduce negative environmental impacts.' : 'Adoptar práticas sustentáveis que reduzam significativamente impactos ambientais negativos.'
              ].map((commitment, idx) => (
                <li key={idx}>{commitment}</li>
              ))}
            </ul>
            <p className="mt-4">
              {language === 'en' 
                ? 'Thus, Moozi fully commits to responsible and sustainable urban mobility, creating tangible value for society and positioning itself as a benchmark in Mozambique\'s urban transportation sector.'
                : 'Assim, a Moozi compromete-se plenamente com uma mobilidade urbana responsável e sustentável, criando valor tangível para a sociedade e posicionando-se como referência no sector de transporte urbano em Moçambique.'
              }
            </p>
          </section>
        </div>
      </div>
    </div>


    

    <Footer language={language} />



    </>
    
  )
}

export default About;
