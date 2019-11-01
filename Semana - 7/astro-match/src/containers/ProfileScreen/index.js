import React from 'react'
import { connect } from 'react-redux'
import { profileMatched } from '../../actions/profiles'

class ProfileScreen extends React.Component {
  render() {
    return (
      <div>
        <h1>to fazendo o perfil ainda :/</h1>
        {/* {profileMatched && profileMatched.map((info, id) => 
         <div key={id}> 
          <img src={info.photo}/> 
          <p>{info.name}</p>
          <p>{info.bio}</p>
        </div>
        )} */}
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  profileMatched : state.allNewPersonLiked
})

const mapDispatchToProps = (dispatch) => ({
  matchedProfile : (id) => dispatch(profileMatched(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
