import './index.scss';
import teste from '../../assets/images/my-logo.png';

export default function ProjectCard() {
  const readMore = () => {
    console.log('teste');
  }

  return (
    <div className="card">
      <div className="content">
        <img src={ teste } alt="testando" />
        <div className="info">
        <h1>Project name</h1>
        <p>Descrição abreviada do projeto!
        </p>
        <button type="button" onClick={ readMore }>Mais</button>
        </div>
      </div>

      <div className="content">
        <img src={ teste } alt="testando" />
        <div className="info">
        <h1>Project name</h1>
        <p>Descrição abreviada do projeto.
        </p>
        <button type="button" onClick={ readMore }>Mais</button>
        </div>
      </div>

      <div className="content">
        <img src={ teste } alt="testando" />
        <div className="info">
        <h1>Project name</h1>
        <p>Descrição abreviada do projeto.
        </p>
        <button type="button" onClick={ readMore }>Mais</button>
        </div>
      </div>

      <div className="content">
        <img src={ teste } alt="testando" />
        <div className="info">
        <h1>Project name</h1>
        <p>Descrição abreviada do projeto.
        </p>
        <button type="button" onClick={ readMore }>Mais</button>
        </div>
      </div>
    </div>
  )
}
