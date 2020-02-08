import React, { useEffect } from "react";
import FeedContent from "../../containers/FeedContent/home";
import firebase from '../../firebase'

const Home = ({
	history
}) => {
	useEffect(() => {
		firebase.auth().onAuthStateChanged(user => {
			if (!user) { 
				return history.push('/')
			}
		}
	)
	}, [])

	return (
		<FeedContent />
	)
}


export default Home
