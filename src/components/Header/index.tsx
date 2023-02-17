import markerIcon from '../../assets/marker.svg'
import searchIcon from '../../assets/search.svg'

import './style.scss';

export const Header = () => {
  return (
    <header>
      <span >find your block</span>
      <h1>Encontre os melhores <span>blocos de carnaval</span> de 2023</h1>

      <form>
        <div className='input-container'>
          <i className="fa fa-search" />
          <input type="text" id="fname" name="fname" placeholder="Pesquise por nome" />
        </div>

        <div className='select-container'>
          <i className="fa fa-map-marker"></i>
          <select name="plan" id="plan">
            <option defaultValue="select a city" hidden>
              <img src={markerIcon} alt="icone marker" /> Selecione uma cidade
            </option>
            <option value="fortaleza">Frotaleza</option>
            <option value="salvador">Salvador</option>
            <option value="recife">Recife</option>
            <option value="rio">Rio de janeiro</option>
          </select>
        </div>
        <button>Buscar agora</button>
      </form>
    </header>
  );
};