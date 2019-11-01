import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {AppBar} from '../../components/AppBar'
import {mdiAccountSwitch} from '@mdi/js'
import {updateCurrentPage} from '../../actions/route'
import {Avatar, List, ListItem, ListText, MatchIcon} from './styled'
import { getMatches } from '../../actions/profiles'
import {profileMatched } from '../../actions/profiles'


class MatchScreen extends Component {
	componentDidMount() {
		if (this.props.getMatches) {
			this.props.getMatches()
		}
	}
	
	
	render() {
		const {goToSwipeScreen, matches, goToProfileScreen, selectedMatch} = this.props
		

		return (
			<div>
				<AppBar
					leftAction={<MatchIcon
						path={mdiAccountSwitch}
						size={1}
						onClick={goToSwipeScreen}
					/>}
				/>
				<List>
					{matches && matches.map((match, id) => (
						<ListItem key={id} onClick={() =>  {goToProfileScreen(); selectedMatch(match)}}>
							<Avatar src={match.photo}/>
							<ListText>{match.name}</ListText>
						</ListItem>
					))}
				</List>
			</div>
		)
	}
}

MatchScreen.propTypes = {
	goToSwipeScreen: PropTypes.func.isRequired,
	getMatches: PropTypes.func.isRequired,
	matches: PropTypes.array
}

const mapStateToProps = state => {
	return{ 
		matches: state.profiles.allNewPersonLiked
	}
}

const mapDispatchToProps = dispatch => ({
	goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
	goToProfileScreen: () => dispatch(updateCurrentPage('ProfileScreen')),
	getMatches: () => dispatch(getMatches()),
	selectedMatch: (profile) => dispatch(profileMatched(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchScreen)
