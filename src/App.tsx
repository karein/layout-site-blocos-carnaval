import { Card } from './components/Card';
import { Header } from './components/Header';

import img1 from './assets/card-img-1.svg'
import img2 from './assets/card-img-2.svg'
import img3 from './assets/card-img-3.svg'
import img4 from './assets/card-img-4.svg'
import img5 from './assets/card-img-5.svg'
import img6 from './assets/card-img-6.svg'
import img7 from './assets/card-img-7.svg'
import img8 from './assets/card-img-8.svg'
import img9 from './assets/card-img-9.svg'

import './styles/global.scss';

export function App() {
  return (
    <div className='app'>
      <Header />

      <main>
        <div className='mainDiv'>
          <section className='navBar'>
            <nav>
              <h2>Blocos recomendados</h2>
              <div>
                <button>LISTA</button>
                <button>MAPA</button>
              </div>
            </nav>
          </section>

          <section className='card-container'>
            <Card
              title='O Python do vovô não sobe mais'
              location='São Paulo - SP'
              src={img1}
              alt='imagem de homem usando uma cartola'
            />
            <Card
              title='Todo mundo null'
              location='Florianópolis - SC'
              src={img2}
              alt='imagem de confetes compridos e quadrados no chão' />
            <Card
              title='Hoje dou exception'
              location='Curitiba - PR'
              src={img3}
              alt='multidão de foliões reunidos'
            />
            <Card
              title='Manda Node'
              location='Salvador - BA'
              src={img4}
              alt='homem fantasiado de indío, sorrindo e apontando para frente'
            />
            <Card
              title='Só no back-end'
              location='São Paulo - SP'
              src={img5}
              alt='quatro foliões posando para a foto com os braços abertos e sorrisos largos, três mulheres de vestido e um palhaço.'
            />
            <Card
              title='Esse anel não é de Ruby'
              location='São Paulo - SP'
              src={img6}
              alt='homem de perfil usando colar de flores tocando trompete com foliões ao fundo'
            />
            <Card
              title='Pimenta no C# dos outros é refresco'
              location='Rio de Janeiro - RJ'
              src={img7}
              alt='três mulheres posando de frente no meio da rua uma ao lado da outra'
            />
            <Card
              title='EnCACHE aqui'
              location='Porto Alegre - RS'
              src={img8}
              alt='imagem das costas de grupo de foliões'
            />
            <Card
              title='Não valho nada mas JAVA li'
              location='São Paulo - SP'
              src={img9}
              alt='mulher com o rosto pintado de listras e pontos sorrindo com foliões ao fundo'
            />
          </section>
        </div>
      </main>
    </div>
  );
}