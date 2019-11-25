import React from 'react'
import { connect } from 'react-redux'
import { profileMatched } from '../../actions/profiles'
import {updateCurrentPage} from '../../actions/route'
import {AppBar} from '../../components/AppBar'
import Icon from '@mdi/react'
import {mdiAccountMultipleCheck} from '@mdi/js'
// import {Avatar, List, ListItem, ListText, MatchIcon} from './styled'

import styled from 'styled-components'

export const MatchIcon = styled(Icon)`
	display: block;
  fill: #753192;
`

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfilePhoto = styled.img`
  width: 400px;
  height: 300px;
  padding: 10px;
`
const ProfileName = styled.h1`
  text-align: center;
`
const ProfileBio = styled.p`
  padding: 10px;
  font-size: 1.5rem;
`

class ProfileScreen extends React.Component {
  render() {
    const profile = this.props.profileMatched
    const {goToMatchScreen} = this.props
    return (
      <ProfileContainer>
        <AppBar
					leftAction={<MatchIcon
						size={1.5}
						path={mdiAccountMultipleCheck}
						onClick={goToMatchScreen}
          />}
          />
        <ProfilePhoto src={profile.photo}/>
        <ProfileName>{profile.name}, <span>{profile.age}</span></ProfileName>
        <ProfileBio>{profile.bio}</ProfileBio>
        
      </ProfileContainer>
    )
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return {  
  profileMatched : state.profiles.selectedPerson
}
}

const mapDispatchToProps = (dispatch) => ({
  matchedProfile : (id) => dispatch(profileMatched(id)),
  goToMatchScreen: () => dispatch(updateCurrentPage('MatchScreen')),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
