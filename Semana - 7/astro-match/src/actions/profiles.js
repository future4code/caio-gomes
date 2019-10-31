import axios from 'axios'


export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
}



const choosePersonAction = (newPerson) => ({
  type: "CURRENT_PERSON",
  payload: {
    newPerson, 
  }
});


export const fetchPerson = () => async (dispatch, getState) => {
  const response = await axios.get(
    'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio/person')

  dispatch(choosePersonAction(response.data.profile))

}


const chooseProfile = (id, choice) => ({
	type: "CHOOSE_PROFILE",
	payload: {
		id: id,
		choice, choice
	}
})

export const profileChoosed = (id, choice) => async (dispatch, getState) => {
	await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/caio/choose-person/${id}/${choice}`,
		{
			'header': "Conten-Type: application/json"
		},
			dispatch(chooseProfile(id, choice))
	);
}