import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

import AnimatedLetters from '../../components/AnimatedLetters/index';
import AnimatedIcons from '../../components/AnimatedIcons/index';
import PortfolioContext from '../../context/PortfolioContext';
import { Loader } from 'react-loaders';

export default function Home() {
  const { letterClass, setLetterClass } = useContext(PortfolioContext);
  const nameArray = 'Anthony';
  const jobArray = 'Desenvolvedor web';
  const welcome = 'Bem vindo!';
  const iAm = 'Eu sou';

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-houver')
    }, 5000);
    return () => {
      setLetterClass('text-animate')
    }
  }, [setLetterClass])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              str={ welcome }
              letterClass={ letterClass }
              idx={ 12 }
            />
            <br />
            <AnimatedLetters
              str={ iAm }
              letterClass={ letterClass }
              idx={ 19 }
            />
            &nbsp;
            <AnimatedLetters
              letterClass={ letterClass }
              str={ nameArray }
              idx={ 24 }
            />
            <br />
            <AnimatedLetters
              letterClass={ letterClass }
              str={ jobArray }
              idx={ 31 }
            />
          </h1>
          <h2>Full stack developer</h2>
          <Link to="/contact" className="flat-button">Contact me</Link>
        </div>
        <AnimatedIcons />
      </div>
      <Loader type="ball-clip-rotate"/>
    </>
  )
}
