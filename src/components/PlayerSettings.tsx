import React from "react";
import Props from "../models/Props";
import {connect} from "react-redux";
import {getNewQuote, getUniqueLetters, mapDispatchToProps, mapStateToProps} from "../utils/utilMethods";

export const PlayerSettings = (props: Props) => {

    const resetGame = async () => {
        const quote = await getNewQuote()
        if (quote) {
            props.resetGame(quote.id, quote.content);
        }
    };

    const isFinishedGame = () => {
        const uniqueCharacters = getUniqueLetters(props.game?.content || "");
        return uniqueCharacters.size === props.game?.revealedLetters.length;
    };

    return (
        <div className="columns">
            <div className="column">
                <div className="is-size-3 has-text-weight-bold">Player: {props.game?.userName}</div>
                <div className="is-size-3 has-text-weight-bold">Errors: {props.game?.errors}</div>
            </div>
            <div className="column is-multiline">
                <button className="button is-info is-large is-pulled-right ml-5" onClick={resetGame}>
                    Reset game
                </button>
                {isFinishedGame() &&
                    <button className="button is-info is-large is-pulled-right"
                            onClick={() => console.log('Show highscore')}>
                        Show highscore
                    </button>
                }
            </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSettings);
