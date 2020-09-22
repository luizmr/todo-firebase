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
				{edit.length > 0 ? (
					<div className="form__input">
						<input
							type="text"
							name="name"
							placeholder={edit}
							onChange={(e) => setItem(e.target.value)}
							value={item}
						/>
					</div>
				) : (
					<div className="form__input">
						<input
							type="text"
							name="name"
							placeholder="Adicione um item"
							onChange={(e) => setItem(e.target.value)}
							value={item}
						/>
					</div>
				)}

				{edit.length > 0 ? (
					<button type="submit">Editar</button>
				) : (
					<button type="submit">Adicionar</button>
				)}
			</form>
		</div>
	);
}

export default TodoForm;
