import axios from 'axios'

const clearProfiles = (id) => ({
  type: "CLEAR_PROFILES",
  payload: {
    id,
  }
})

export const clearSwipes = (id) => async (dispatch) => {
	axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio/clear',
		{
			'header': "Content-Type: application/json"
		},
		{
			'data': {
				id
			}
		},
	)
		dispatch(clearProfiles(id))
}

const choosePersonAction = (newPerson) => ({
  type: "CURRENT_PERSON",
  payload: {
    newPerson, 
  }
});

export const fetchPerson = () => async (dispatch) => {
  const response = await axios.get(
    'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio/person')

  dispatch(choosePersonAction(response.data.profile))
}

const chooseProfile = (id, choice) => ({
	type: "CHOOSE_PROFILE",
	payload: {
		id,
		choice,
	}
})

export const profileChoosed = (id, choice) => async (dispatch, getState) => {
	const personLike = getState().profiles.newPerson
		await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio/choose-person/",
		{
			'header': "Content-Type: application/json"
		},
		{
			'data': {
				'id' : id,
				'choice': choice
			}
		},
			dispatch(chooseProfile(id, choice, personLike))
	);
}

const matchProfile = (matches) => ({
	type: "GET_MATCHES",
	payload: {
		matches,
	}
})

export const getMatches = () => async (dispatch) => {
	const response = await axios.get(
		'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio/matches'
	)
	dispatch(matchProfile(response.data.matches))
}

export const profileMatched = (profile) => ({
	type: "PROFILE_MATCHED",
	payload: {
		profile
	}
})