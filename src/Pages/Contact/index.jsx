import { useContext, useEffect, useRef } from 'react';

import { Loader } from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../components/AnimatedLetters/index';

import PortfolioContext from '../../context/PortfolioContext';
import emailjs from '@emailjs/browser'

export default function Contact() {
  const { letterClass, setLetterClass } = useContext(PortfolioContext);
  const refForm = useRef();
  const contactMe = 'Contato';

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-houver');
    }, 3000);
    return () => setLetterClass('text-animate');
  }, [setLetterClass]);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_x9p8pks',
      'template_dwyxlfb',
      // 'service_x9p8pks',
      refForm.current,
      'sNytl4G-wxJImU70y',
    ).then(() => {
      alert('Mensagem enviada');
      window.location.reload(false);
    },
    (error) => {
      alert('Falha ao enviar mensagem, tente novamente.');
      console.log(error);
    }
    )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone contact-text">
          <h1>
            <AnimatedLetters str={ contactMe } idx={ 15 } letterClass= { letterClass } />
          </h1>
          <div className="contact-form">
            <form onSubmit={ (e) => sendEmail(e) } ref={ refForm }>
              <ul>
                <li className="input-area">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    required
                  />
                </li>
                <li className="input-area">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="input-area">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Assunto"
                    required
                />
                </li>
                <li className="text-area">
                  <textarea
                    name="message"
                    placeholder="Mensagem"
                    required
                />
                </li>
                <li>
                  <input
                    type="submit"
                    value="Enviar"
                    className="submit-button"
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate"/>
    </>
  );
}
