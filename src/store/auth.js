import firebase from 'firebase/compat/app'

export default {
  actions: {
    async login ({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log(dispatch, commit)
      } catch (e) {

      }
    }
  }
}
