/* eslint-disable react/jsx-max-depth */
import { useEffect, useState } from 'react';
import './Card.css';
import Title from '../Title/Title';
import pointGenerator from '../../helpers/pointGenerator';
import Atrribute from './Attribute';
import SuperTryunfo from '../../assets/logo_tryunfo.png';
import validarImagem from '../../helpers/validateImg';
import { CardTypeProps } from '../../types/card';

function Card(
  {
    nome,
    raridade,
    descricao,
    Attr01,
    Attr02,
    Attr03,
    imagemLink,
    SuperTrunfo,
    preview,
    attrFontSize,
    className }: CardTypeProps,
) {
  const GIF_DEFAULT = 'https://i.pinimg.com/originals/32/44/01/324401aa18cc80c55f338dcd4674cb80.gif';
  const [imagemValida, setImagemValida] = useState(true);

  useEffect(() => {
    if (imagemLink.length > 0) {
      validarImagem(imagemLink, setImagemValida);
    } else {
      setImagemValida(false);
    }
  }, [imagemLink]);

  return (
    <section id="card-main-container" className={ ` ${className}` }>
      <Title
        className={ `h3 text-color-primary text-center mb-5 ${
          preview ? 'd-block' : 'd-none'
        }` }
        title="pré-visualização"
      />
      <div id="card-container" className="container">
        <div className={ `${preview && 'pt-3'} pb-3 ` }>
          <div className={ `${preview && 'd-none'} text-center` }>
            <span><i className="bi bi-trash-fill" /></span>
          </div>
          <header className="card-header">
            <span id={ raridade } className="Raridade">{raridade}</span>
            <h3 id={ raridade }>{nome || 'Nome'}</h3>
          </header>
          <div id="card-img-container">
            <img
              id="card-img"
              src={ imagemValida ? imagemLink : GIF_DEFAULT }
              alt="Imagem do card"
              className="img-fluid h-100"
            />
            { SuperTrunfo && (
              <img id="super-tryunfo-img" src={ SuperTryunfo } alt="Super-Tryunfo" />
            )}
          </div>
          <div id="descricao-container">

            <p>{descricao || 'Descrição do card'}</p>
          </div>
          <div id="atributos-container">
            <div id="atributos-itens" className="mt-4">

              <Atrribute
                label={ `Attr01${pointGenerator(40)}` }
                value={ Attr01 }
                attrFontSize={ attrFontSize }
              />
              <Atrribute
                label={ `Attr02${pointGenerator(40)}` }
                value={ Attr02 }
                attrFontSize={ attrFontSize }
              />
              <Atrribute
                label={ `Attr03${pointGenerator(40)}` }
                value={ Attr03 }
                attrFontSize={ attrFontSize }
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}

export default Card;
