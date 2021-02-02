  
import firebase from 'firebase'

import 'firebase/firestore'

import config from './firebase.config'

const app = firebase.initializeApp(config)

export const db = app.firestore()