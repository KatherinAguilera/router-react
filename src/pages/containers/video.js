import React, { Component } from 'react'
import { connect } from 'react-redux'
import VideoPlayer from '../../player/containers/video-player';
import NotFound from '../components/not-found'

// url independiente para cada video
class Video extends Component{
  render() {
  	console.log(this.props.match.params.id)
		if (this.props.existId) {
				return (
				<VideoPlayer
					id={this.props.id}
				/>
			)
		}

		return <NotFound />
  }
}

function mapStateToProps(state, props) {
	const id = props.match.params.id;
	return {
		existId: state.get('data').get('entities').get('media').has(id),
		id: id
	}
}
export default connect(mapStateToProps)(Video);;