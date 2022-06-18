import { useContext, useEffect } from 'react';

import { Loader } from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../components/AnimatedLetters/index';

import PortfolioContext from '../../context/PortfolioContext';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const { letterClass, setLetterClass } = useContext(PortfolioContext);
  const contactMe = 'Projetos';

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-houver');
    }, 3000);
    return () => setLetterClass('text-animate');
  }, [setLetterClass]);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone projects-text">
          <h1>
            <AnimatedLetters str={ contactMe } idx={ 15 } letterClass= { letterClass } />
          </h1>
        </div>
        <ProjectCard />
      </div>
      <Loader type="ball-clip-rotate"/>
    </>
  );
}
