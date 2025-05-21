import React from 'react'
import { Footer } from '../../components/Footer/Footer'
import { useLanguage } from '../../context/LanguageContext'
import { Navbar } from '../../components/Navbar/Navbar';

import './VehicleCategory.css';

const VehicleCategory = () => {

    const {language} = useLanguage();

  return (
    <>

    <Navbar language={language} />
    {/* Vehicle Categories */}
    <section className="vehicle-category-container space-y-4 my-15 max-w-[70%] mx-auto">
    <h2 className="text-xl text-[#0080e2] font-semibold">
      {language === 'en'
        ? 'Accepted Vehicle Categories'
        : 'Categorias de Veículos Aceites' }
    </h2>
    <p>
      {language === 'en'
        ? 'At Moozi, each category is designed to offer comfort, safety, and affordability.'
        : 'Na Moozi, cada categoria foi pensada para oferecer conforto, segurança e acessibilidade.'}
    </p>

    <div className="overflow-x-auto">
      <table className="table w-full border rounded-lg">
        <thead>
          <tr className="bg-base-200">
            <th>{language === 'en' ? 'Category' : 'Categoria'}</th>
            <th>{language === 'en' ? 'Description' : 'Descrição'}</th>
            <th>{language === 'en' ? 'Examples' : 'Exemplos'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Moozi</td>
            <td>
              {language === 'en'
                ? 'Economical vehicles for daily use.'
                : 'Veículos económicos para o dia a dia.'}
            </td>
            <td>Toyota Vitz, Nissan March, Honda Fit</td>
          </tr>
          <tr>
            <td>Deluxe</td>
            <td>
              {language === 'en'
                ? 'Comfortable vehicles with A/C and extra space.'
                : 'Veículos confortáveis, com A/C e espaço extra.'}
            </td>
            <td>Toyota Corolla, Mazda Verisa, Mazda Axela</td>
          </tr>
          <tr>
            <td>Ela</td>
            <td>
              {language === 'en'
                ? 'Women drivers for female passengers who prefer it.'
                : 'Motoristas mulheres para passageiras que preferem essa opção.'}
            </td>
            <td>
              {language === 'en'
                ? 'Any car driven by a woman'
                : 'Qualquer modelo conduzido por uma mulher'}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-sm mt-2 italic">
      {language === 'en'
        ? '*All vehicles must be in good condition with a valid inspection.'
        : '*Todos os veículos devem estar em bom estado com inspeção válida.'}
    </p>
  </section>

  <Footer language={language} />
    
    </>
  )
}

export default VehicleCategory