import React, { Component } from 'react';
import Media from '../components/media';
import { connect } from 'react-redux';
// import { openModal } from '../../actions/index';
import  * as actions from '../../actions/index';
import { bindActionCreators } from 'redux';
// pedir los datos de media, titulo autor img
 class MediaContainer extends Component {
  openModal = (id) => {
    this.props.actions.openModal(id)
  }
  render(){
    // return <Media {...this.props.data} />
    return <Media openModal={this.openModal} {...this.props.data.toJS()} />
  }
}
function mapStateToProps(state, props) {
  return {
    // data: state.data.entities.media[props.id]
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
 export default connect(mapStateToProps, mapDispatchToProps)(MediaContainer)