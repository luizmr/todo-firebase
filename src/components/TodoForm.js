import React, { useState } from "react";
import { idGenerator } from "../config";

function TodoForm({ addItem, edit, index, updateItem }) {
	const [item, setItem] = useState(edit);

	let id = idGenerator();

	return (
		<div className="form">
			<form
				onSubmit={(e) => {
					e.preventDefault();

					if (edit.length > 0) {
						updateItem(item, index);
						setItem("");
					} else {
						addItem(item, id);
						setItem("");
					}
				}}
			>
				<div className="form__input">
					<input
						type="text"
						name="name"
						placeholder={
							edit.length > 0 ? edit : "Adicione um item"
						}
						onChange={(e) => setItem(e.target.value)}
						value={item}
					/>
				</div>

				<button type="submit">
					{edit.length > 0 ? "Editar" : "Adicionar"}
				</button>
			</form>
		</div>
	);
}

export default TodoForm;
