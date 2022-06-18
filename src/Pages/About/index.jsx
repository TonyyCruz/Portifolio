import './index.scss'
import AnimatedLetters from '../../components/AnimatedLetters/index';
import { useEffect, useContext } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDocker, faGitAlt, faJsSquare, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

export default function About() {
  const { letterClass, setLetterClass } = useContext(PortfolioContext);
  const aboutMe = 'Sobre';

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-houver')
    }, 3000);
    return () => {
      setLetterClass('text-animate')
    }
  }, [setLetterClass])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={ letterClass }
              str={ aboutMe }
              idx={ 15 }
            />
          </h1>
          <p>
            Atualmente sou estudante de desenvolvimento web na Trybe, de onde venho
            adquirindo diversas habilidades como JavaScript, HTML, CSS, React, Redux,
            Jest e dentre outras.
          </p>
          <p>
            Anteriormente atuava na área de vendas, que a pesar de não ter ligação com a
            tecnologia me dou muita experiencia em como lidar com pessoas, colaboração,
            organização e comunicação.
          </p>
          <p>
            O que me atraiu na área de desenvolvimento foi basicamente tudo, na
            programação havia tudo que eu procurava há muito tempo, foi amor ao primeiro
            código.
          </p>
          <p>
            Sempre fui apaixonado por criação, e estava em busca de alguma área que me
            permitisse criar e desenvolver, além disso, gosto muito de encontrar
            soluções para problemas, o que me levou a ficar apaixonado por programação.
            Atualmente meu objetivo é me desenvolver como pessoa programadora e obter o
            máximo de conhecimento que conseguir.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face-1">
              <FontAwesomeIcon icon={ faReact } color="#5ED4F4"/>
            </div>
            <div className="face-2">
              <FontAwesomeIcon icon={ faJsSquare } color="#EFD81D"/>
            </div>
            {/* <div className="face-3">
              <FontAwesomeIcon icon={ faCss3 } color="#28A4D9"/>
            </div> */}
            {/* <div className="face-4">
              <FontAwesomeIcon icon={ faHtml5 } color="#f06529"/>
            </div> */}
            <div className="face-5">
              <FontAwesomeIcon icon={ faNode } color="#3D7D52"/>
            </div>
            <div className="face-6">
              <FontAwesomeIcon icon={ faCode } color="#EC4D28"/>
            </div>
            <div className="face-7">
              <FontAwesomeIcon icon={ faDocker } color="#0DB7ED"/>
            </div>
            <div className="face-8">
              <FontAwesomeIcon icon={ faGitAlt } color="#EC4D28"/>
            </div>

          </div>

        </div>
      </div>
      <Loader type="ball-clip-rotate"/>
    </>
  )
}