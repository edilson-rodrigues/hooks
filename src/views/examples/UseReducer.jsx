import React, {useReducer} from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import {initalState, reducer} from "../../store";
import {numberAdd2, login} from "../../store/actions";

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initalState);

    function getNumber(n) {
        dispatch({
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
            <SectionTitle title={"Exercício #01"}/>
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
                            onClick={() => dispatch({type: "logout", logout: null})}
                        >
                            logout
                        </button>
                    ) : (
                        <button
                            className="btn"
                            onClick={() => login(dispatch, 'Edilson')}
                        >
                            login
                        </button>
                    )}

                    <button
                        className="btn"
                        onClick={() => numberAdd2(dispatch)}
                    >
                        +2
                    </button>
                </div>
            </div>
            {/* desafio */}
            <SectionTitle title={"Exercício #02"}/>
            <div className="center">
                <div>
                    <input
                        type="number"
                        className="input"
                        onChange={(e) => {
                            getNumber(e.target.value);
                        }}
                    />
                </div>
                <div>
                    <button
                        className="btn"
                        onClick={() => dispatch({type: "number_mult7"})}
                    >
                        *7
                    </button>

                    <button
                        className="btn"
                        onClick={() => dispatch({type: "number_div25"})}
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
