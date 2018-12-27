// Este es mi componente principal *(inteligente)
import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
// conectar datos a los componentes
import { connect } from 'react-redux';
import { List as list } from 'immutable';
import { openModal, closeModal } from '../../actions/index';
import * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';
class HomePage extends Component {
  // // setear un estado
  // state= {
  //   modalVisible:false,
  // }
  // handleOpenModal = (media) => {
  //   this.setState({
  //     modalVisible: true,
  //     media
  //   })
  handleOpenModal = (id) => {
    this.props.actions.openModal(id)
  }
  handleCloseModal = (event) => {
    this.props.actions.closeModal()
  }
  // abrir el video aleatorio de router gorandom
  componentDidMount() {
    const search = this.props.location.search
    if(search){
        // const id = search.split('=')[1];
        const id = search.substr(4)
        this.handleOpenModal(id)
    }
  }
  render() {
    return (
      // lo que se coloque aca lo redendeara mi home-layout.js
    <HandleError>
      <HomeLayout>
        <Related />
        <Categories
          categories={this.props.categories}
          handleOpenModal={this.handleOpenModal}
          // agregar propiedades
          search={this.props.search}
          isLoading={this.props.isLoading}
        />
        {
        this.props.modal.get('visibility') &&
        <ModalContainer>
          <Modal
            handleClick={this.handleCloseModal}
          >
            <VideoPlayer
              autoplay
              // src={this.state.media.src}
              // title={this.state.media.title}
              id={this.props.modal.get('mediaId')}
            />
          </Modal>
        </ModalContainer>
        }
      </HomeLayout>
      </HandleError>
    )
  }
}
/***REDUX******/
function mapStateToProps(state, props) {
  // lista de id que tiene las categorias
  // const categories = state.data.categories.map((categoryId) => {
  //   return state.data.entities.categories[categoryId]
  const categories = state.get('data').get('categories').map((categoryId) => {
    // return state.get('data').get('entities').get('categories').get(categoryId)
    return state.get('data').get('entities').get('categories').get(categoryId.toString())
  })
  let searchResults = list()
  const search = state.get('data').get('search');
  if (search) {
    const mediaList = state.get('data').get('entities').get('media');
    searchResults = mediaList.filter((item) => (
      item.get('author').toLowerCase().includes(search.toLowerCase())
    )).toList();
  }
  return {
    // categories: state.data.categories,
    categories: categories,
    // search: state.search
    // search: state.data.search
    // search: state.get('data').get('search')
    search: searchResults,
    modal: state.get('modal'),
    isLoading: state.get('isLoading').get('active')
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // actions: bindActionCreators(acciones, dispatch)
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
// export default connect(mapStateToProps)(HomePage)