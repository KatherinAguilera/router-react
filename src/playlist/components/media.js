// siempre llamar a react
import React, { PureComponent } from 'react';
// importando archivo css
import './media.css';
import PropTypes from"prop-types";
import { Link } from 'react-router-dom';
// extender propiedades //Media es el nom del componente
class Media extends PureComponent {
  state = {
    author: this.props.author
  }
  handleClick = (event) => {
    // console.log(this.props.image)
    // this.setState({
    //   author: 'Ricardo Celis',
    // })
    // this.props.openModal(this.props);
    this.props.openModal(this.props.id);
  }
  render() {
    return (
      // UI syntaxis JSX
      // this porque hara algo de class Media .nombreFuncion
      // onclick enlazar evento clic del DOM
      <Link
        // Definir to como objeto para enviar varios parametros
        to={{
        pathname: '/videos',
        search: `?id=${this.props.id}`,
        state: {
        modal: true,
        id: this.props.id
        }
        }}
      >
        <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img className="Media-image"
            src={this.props.cover}
            alt=""
            width={240}
            height={160}
          />
          {/* {this.props.title} es el valor dinamico que se le pasa
           con this.props.propiedad de <Media /> del index.js */}
        </div>
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
          <span className= "Media-type">
            <strong>Esto es: </strong>{this.props.type}
          </span>
        </div> 
      </Link>
    )
  }
}
// exportar componente al index.js
export default Media;
// validando tipo de propiedades
Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(["video", "audio", "Tecnología", "Video - Rock", "Video - gothic", "Video - Metal" ])
}
