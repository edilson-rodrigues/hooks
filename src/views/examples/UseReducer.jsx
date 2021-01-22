import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initalState = {
	cart: [],
	products: [],
	user: null,
	other: "...",
	// foco... number
	number: 0,
};

function reducer(state, action) {
	switch (action.type) {
		case "number_add2":
			return { ...state, number: state.number + 2 };
		case "login":
			return { ...state, user: action.name };
		case "logout":
			return { ...state, user: action.logout };
		default:
			return state;
	}
}

//desafio
const desafioInitalState = {
	number: 1,
};
function desafioReducer(state, action) {
	switch (action.type) {
		case "number_mult7":
			return { ...state, number: state.number * 7 };
		case "number_div25":
			return { ...state, number: parseInt(state.number / 25) };
		case "add_number":
			return { ...state, number: action.number };
		default:
			return state;
	}
}

//fim desafio

const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, initalState);

	//desafio
	const [desafioState, desafioDispatch] = useReducer(
		desafioReducer,
		desafioInitalState
	);

	function getNumber(n) {
		desafioDispatch({
			type: "add_number",
			number: parseInt(n),
		});
	}
	//fim desafio

	return (
		<div className="UseReducer">
			<PageTitle
				title="Hook UseReducer"
				subtitle="Uma outra forma de ter estado em componentes funcionais!"
			/>
			<SectionTitle title={"Exercício #01"} />
			<div className="center">
				{state.user ? (
					<span className="text">{state.user}</span>
				) : (
					<span className="text">Visitante</span>
				)}

				<span className="text">{state.number}</span>
				<div>
					{state.user != null ? (
						<button
							className="btn"
							onClick={() => dispatch({ type: "logout", logout: null })}
						>
							logout
						</button>
					) : (
						<button
							className="btn"
							onClick={() => dispatch({ type: "login", name: "Edilson" })}
						>
							login
						</button>
					)}

					<button
						className="btn"
						onClick={() => dispatch({ type: "number_add2" })}
					>
						+2
					</button>
				</div>
			</div>
			{/* desafio */}
			<SectionTitle title={"Exercício #02"} />
			<div className="center">
				<span className="text">{desafioState.number}</span>
				<div>
					<input
						type="number"
						className="input"
						onChange={(e) => {
							getNumber(e.target.value);
						}}
					></input>
				</div>
				<div>
					<button
						className="btn"
						onClick={() => desafioDispatch({ type: "number_mult7" })}
					>
						*7
					</button>

					<button
						className="btn"
						onClick={() => desafioDispatch({ type: "number_div25" })}
					>
						/25
					</button>
				</div>
			</div>
			{/* fim do desafio */}
		</div>
	);
};

export default UseReducer;
