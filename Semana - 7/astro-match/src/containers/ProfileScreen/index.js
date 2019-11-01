import React from 'react'
import { connect } from 'react-redux'
import { profileMatched } from '../../actions/profiles'
import styled from 'styled-components'


const ImageProfile = styled.img`
  width: 400px;
  height: 300px;
`

class ProfileScreen extends React.Component {
  render() {
    const profile = this.props.profileMatched
    return (
      <div>
        <ImageProfile src={profile.photo}/>
        <h1>{profile.name}, <span>{profile.age}</span></h1>
        <p>{profile.bio}</p>
      </div>
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
  matchedProfile : (id) => dispatch(profileMatched(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
