import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCbE1BDPrlw-uecJVZw9YnxYDVYagf2h1M",
	authDomain: "todo-firebase-987f8.firebaseapp.com",
	databaseURL: "https://todo-firebase-987f8.firebaseio.com",
	projectId: "todo-firebase-987f8",
	storageBucket: "todo-firebase-987f8.appspot.com",
	messagingSenderId: "507967309834",
	appId: "1:507967309834:web:5543cddc7c52df972cb7f3",
};
// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

// função que gera um id para cada elemento no db, bem como o nome de cada doc
function idGenerator() {
	let timestamp = new Date();

	let id =
		timestamp.getHours().toString() +
		timestamp.getMinutes().toString() +
		timestamp.getSeconds().toString() +
		timestamp.getMilliseconds().toString();

	return id;
}

export { db, idGenerator };
