import { ClipboardDocumentCheckIcon, ShieldCheckIcon, HeartIcon, ArrowPathIcon, FaceSmileIcon, GlobeEuropeAfricaIcon, FlagIcon } from '@heroicons/react/24/outline'

const features_pt = [
  {
    name: '1. Segurança e Fiabilidade',
    description:
      'Garantimos máxima segurança em cada viagem, utilizando tecnologia avançada, processos rigorosos de verificação dos motoristas e atenção constante ao bem-estar dos utilizadores.',
    icon: ShieldCheckIcon,
  },
  {
    name: '2. Excelência Centrada no Cliente',
    description:
      'Procuramos excelência em cada interação, oferecendo atendimento amigável, confortável e personalizado, adaptado às necessidades específicas dos nossos clientes.',
    icon: FaceSmileIcon,
  },
  {
    name: '3. Inovação Inteligente e Sustentável',
    description:
      'Implementamos tecnologias avançadas e sustentáveis para promover uma mobilidade inteligente que reduz o impacto ambiental e melhora continuamente a experiência dos utilizadores.',
    icon: ArrowPathIcon,
  },
  {
    name: '4. Transparência e Ética',
    description:
      'Mantemos comunicação transparente, clara e ética em todas as interações, construindo confiança e promovendo relações sólidas e duradouras.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: '5. Inclusão, Diversidade e Respeito Cultural',
    description:
      'Promovemos activamente a inclusão, diversidade e igualdade, valorizando e respeitando as especificidades culturais locais, criando oportunidades acessíveis para todos, com especial ênfase no empoderamento de mulheres e jovens.',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: '6. Responsabilidade Social com Impacto Comunitário',
    description:
      'Contribuímos activamente para o desenvolvimento socioeconómico das comunidades através de iniciativas concretas e práticas sustentáveis, gerando benefícios directos e mensuráveis nas regiões onde operamos.',
    icon: FlagIcon,
  },
]
const features_en = [
  {
    name: '1. Safety and Reliability',
    description:
      'We ensure maximum safety on every journey through advanced technology, rigorous driver verification processes, and constant attention to user well-being.',
    icon: ShieldCheckIcon,
  },
  {
    name: '2. Customer-Centric Excellence',
    description:
      'We strive for excellence in every interaction, delivering friendly, comfortable, and personalized service tailored to the specific needs of our customers.',
    icon: FaceSmileIcon,
  },
  {
    name: '3. Smart and Sustainable Innovation',
    description:
      'We implement advanced and sustainable technologies to foster smart mobility that reduces environmental impact and continuously enhances the user experience.',
    icon: ArrowPathIcon,
  },
  {
    name: '4. Transparency and Ethics',
    description:
      'We maintain transparent, clear, and ethical communication in all interactions, building trust and fostering strong, lasting relationships.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: '5. Inclusion, Diversity and Cultural Respect',
    description:
      'We actively promote inclusion, diversity, and equality, respecting and valuing local cultural specificities and creating accessible opportunities for all, with special emphasis on empowering women and youth.',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: '6. Social Responsibility with Community Impact',
    description:
      'We actively contribute to the socioeconomic development of communities through concrete initiatives and sustainable practices, generating direct and measurable benefits in the regions where we operate.',
    icon: FlagIcon,
  },
]

export const FeatureOne = ({language}) => {
  return (
    <div className="bg-white py-5 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base/7 font-semibold text-[#017eff]">
              {language === 'en' ? `Choose your ride` : `Valores Corporativos`}</h2> */}
          <p className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          {language === 'en' ? `Choose your ride` : `Valores Corporativos`}
          </p>
          {/* <p className="mt-6 text-lg/8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {language === 'en' ? return_features(features_en) : return_features(features_pt)}
          </dl>
        </div>
      </div>
    </div>
  )
}

const return_features = (features) => {

  return features.map((feature) => (
    <div key={feature.name} className="relative pl-16">
      <dt className="text-base/7 font-semibold text-gray-900">
        <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-[#017eff]">
          <feature.icon aria-hidden="true" className="size-6 text-white" />
        </div>
        {feature.name}
      </dt>
      <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
    </div>
  ))


}
