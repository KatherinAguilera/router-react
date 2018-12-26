import React, { Component } from 'react';
import Search from '../components/search';
import { connect } from 'react-redux';
// import { searchEntities } from '../../actions/index';
import  * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';
class SearchContainer extends Component {
  // Estado por defecto en el buscador
  state = {
    value: ''
  }
  //  evitar que recargue la pagina

  handleSubmit = event => {
    event.preventDefault();
    // this.props.dispatch(searchEntities(this.input.value))
    // this.props.actions.searchEntities(this.input.value)
    this.props.actions.searchAsyncEntities(this.input.value)
    // fetch(`http://miapi.com/buscar/${this.input.value}`).then((data)=>{
    // })
  }
  // funcion de acceder al elemento
  setInputRef = element => {
    this.input = element;
  }
  handleInputChange = event => {
    this.setState({
      // value: event.target.value.replace(' ', '-')
      // espacio al hacerla busqueda
      value: event.target.value.replace(' ', ' ')
    })
  }
  render() {
    return (
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(SearchContainer);