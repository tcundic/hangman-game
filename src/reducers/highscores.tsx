// Highscores Reducer

import Highscore from "../models/highscore";
import HighscoresAction from "../models/highscoresAction";

function sortHighscores(a: Highscore, b: Highscore) {
    if (
        a.errors === b.errors &&
        a.uniqueCharacters === b.uniqueCharacters &&
        a.length === b.length
    ) {
        return a.duration - b.duration;
    } else if (
        a.errors === b.errors &&
        a.uniqueCharacters === b.uniqueCharacters
    ) {
        return b.length - a.length;
    } else if (a.errors === b.errors) {
        return b.uniqueCharacters - a.uniqueCharacters;
    } else {
        return a.errors - b.errors;
    }
};

const highscoresReducerDefaultState: Array<Highscore> = [];

const highscoresReducer = (state = highscoresReducerDefaultState, action: HighscoresAction) => {
    switch (action.type) {
        case 'SET_HIGHSCORES':
            return action.highscores.sort(sortHighscores)
        default:
            return state;
    }
};

export default highscoresReducer;