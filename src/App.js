import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { db } from "./config";

function App() {
	const [items, setItems] = useState([]);
	const [edit, setEdit] = useState("");
	const [index, setIndex] = useState();
	const [newAtt, setNewAtt] = useState(0);

	useEffect(() => {
		let todoRef = db.collection("todo").orderBy("id");
		todoRef.get().then(function (querySnapshot) {
			let newItems = [];
			querySnapshot.forEach(function (doc) {
				// para cada doc dentro da collection, adiciona na array
				newItems.push({ ...doc.data() });
			});
			// seta o estado com a nova array
			setItems(newItems);
		});
		// effect é chamado toda vez que um novo estado da newAtt é setado
	}, [newAtt]);

	return (
		<>
			<h1>Todo List - Firebase</h1>
			<TodoForm
				addItem={(item, i) => {
					// se a string é válida, então
					if (item.length > 0) {
						// seta um novo objeto dentro de um doc definido pelo index (id gerado)
						db.collection("todo")
							.doc(i)
							.set(
								Object.assign({
									task: item,
									id: i,
								})
							);

						// quando o db é atualizado, o newAtt é setado com um novo valor
						// para o useEffect ser chamado e setar o novo estado de items
						setNewAtt(Math.random());
					}
				}}
				edit={edit}
				index={index}
				updateItem={(item, i) => {
					// usa a referencia de posição na array para usar o id e puxar o doc correto
					// após isso, faz o update do item no db
					db.collection("todo")
						.doc(`${items[i].id}`)
						.update({
							task: item,
						})
						.then(function () {
							console.log("Document successfully updated!");
							setEdit("");
							// atualizar o state do items
							setNewAtt(Math.random());
						})
						.catch(function (error) {
							// The document probably doesn't exist.
							console.error("Error updating document: ", error);
						});
				}}
			/>
			<TodoList
				items={items}
				deleteItem={(i) => {
					// puxa o index da array e busca o doc com o id
					// deleta o doc com os dados
					db.collection("todo")
						.doc(`${items[i].id}`)
						.delete()
						.then(function () {
							console.log("Document successfully deleted!");
							// atualiza o state do items
							setNewAtt(Math.random());
						})
						.catch(function (error) {
							console.error("Error removing document: ", error);
						});
				}}
				editItem={(item, i) => {
					// seta o estados que serão passados para o TodoForm
					setEdit(item);
					setIndex(i);
				}}
			/>
		</>
	);
}

export default App;
