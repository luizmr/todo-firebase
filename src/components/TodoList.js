import React from "react";
import { FaRegCheckCircle, FaEdit, FaTrashAlt } from "react-icons/fa";

function TodoList({ items, deleteItem, editItem }) {
	return (
		<>
			<ul className="list">
				{items.map((item, index) => (
					<li key={index} className="list__item">
						<div className="list__text">
							<FaRegCheckCircle className="list__icon" />{" "}
							<p>{item.task}</p>
						</div>
						<div className="list__buttons">
							<button
								className="trash"
								onClick={() => {
									deleteItem(index);
								}}
							>
								<FaTrashAlt className="list__buttonsIconTrash" />
							</button>

							<button
								className="edit"
								onClick={(e) => {
									editItem(item.task, index);
								}}
							>
								<FaEdit className="list__buttonsIconEdit" />
							</button>
						</div>
					</li>
				))}
			</ul>
		</>
	);
}

export default TodoList;
