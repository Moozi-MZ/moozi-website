import React from 'react'
import DRIVER from '../../assets/posts/driver.jpg'
import { useLanguage } from '../../context/LanguageContext'
import { Link } from 'react-router-dom'

export const DriverDiv = () => {

    const { language } = useLanguage();
  return (
    <div class="max-w-[100%] mx-auto bg-gray-100 p-4 rounded-lg ">
        <div class="mx-auto pb-5 rounded-lg flex flex-wrap justify-center items-center space-x-6">
            <img src={DRIVER} alt="Placeholder Image" class="w-110 object-cover rounded-lg" />

            <div className='max-w-[600px]'>
            <h1 class="mb-5 text-xl font-bold">{language === 'en' ? 
                                                `Want to be a driver?` : 
                                                `Quer ser um motorista?` } </h1>
                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" defaultChecked />
                    <div className="collapse-title font-semibold">{language === 'en' ? `Where can I download the app and pre-register?` :
                    `Onde posso baixar o aplicativo e fazer o pré-cadastro?`}</div>
                    <div className="collapse-content text-sm">{language === 'en' ? 
                                                `The Moozi Driver app is available on the Google Play Store.
                                                To begin, visit the Driver or Customer section on our website and complete the pre-registration form.
                                                This helps us verify your information before activating your account.
` : 
                                                `A aplicação Moozi Driver está disponível na Google Play Store.
                                                Para iniciar o processo, visita a secção Condutor no nosso site, organiza os teus documentos, baixa o aplicativo e procede com o teu pré-cadastro.
                                                A nossa equipa fará a revisão do teu cadastro e procederá com a activação da tua conta.
                                                `} </div>
                    
                </div>

                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">{language === 'en' ? 
                                                `I want to become a driver, what should I do?` : 
                                                `Quero ser motorista. Como faço?` }</div>
                    <div className="collapse-content text-sm">{language === 'en' ? 
                                                ( <p>
                                                To get all the details, visit the <Link style={{ textDecoration: 'underline', color: '#0080e2' }} to='/driver'>Driver</Link> section on this website. There you’ll find the registration requirements and the benefits of becoming a Moozi Driver.
                                                </p>) :
                                                // embed link to driver section in the text 
                                                ( <p>
                                                Para obter todos os detalhes, visita a secção para <Link style={{ textDecoration: 'underline', color: '#0080e2' }} to='/driver'>Condutor</Link> neste site. Lá encontrarás os requisitos de cadastro e as vantagens de ser um Moozi Driver.
                                                </p>) }</div>
                </div>

                <div className="collapse bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-1" />
                    <div className="collapse-title font-semibold">{language === 'en' ? 
                                                `What are the vehicle requirements?` : 
                                                `Quais são os requisitos das viaturas?` }</div>
                    <div className="collapse-content text-sm">{language === 'en' ? 
                                                ( <ul>The vehicle must:
                                                    <li>- Be in good mechanical and visual condition</li>
                                                    <li>- Have a valid inspection and active insurance</li>
                                                    <li>- Have a Vehicle Registration</li>
                                                    <li>- Preferably have 4 doors and air conditioning</li>
                                                    </ul>) :
                                                // embed link to driver section in the text 
                                                ( <ul>A viatura deve:
                                                    <li>- Estar em boas condições mecânicas e visuais</li>
                                                    <li>- Ter inspecção válida e seguro activo</li>
                                                    <li>- Possuir livrete</li>
                                                    <li>- Ter 4 portas e ar condicionado (preferencial)</li>
                                                    </ul>) }</div>
                </div>
            </div>

        </div>
    </div>

  )
}
