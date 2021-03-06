import React from "react";
import {connect} from "react-redux";
import Props from "../models/Props";
import Sprite from "../utils/Sprite";
import {mapDispatchToProps, mapStateToProps} from "../utils/utilMethods";
//import packageJson from '../../package.json';

//const HANGMAN_SPRITES_URL = `${packageJson.homepage}/hangman.png`;

export class HangmanSprites extends React.Component<Props> {

    getSpritePosition = (numberOfErrors: number | undefined) => {
        switch(numberOfErrors) {
            case 0:
                return {x: 0, y: 0, width: 120, height: 170};
            case 1:
                return {x: 120, y: 0, width: 130, height: 170};
            case 2:
                return {x: 250, y: 0, width: 130, height: 170};
            case 3:
                return {x: 370, y: 0, width: 130, height: 170};
            case 4:
                return {x: 0, y: 170, width: 120, height: 170};
            case 5:
                return {x: 120, y: 170, width: 125, height: 170};
            case 6:
                return {x: 240, y: 170, width: 130, height: 170};
            case 7:
                return {x: 370, y: 170, width: 130, height: 170};
            default:
                return {x: 370, y: 170, width: 130, height: 170};
        }
    };

    render() {
        const {x, y, width, height} = this.getSpritePosition(this.props.game?.errors);
        //return <Sprite filename={HANGMAN_SPRITES_URL} x={x} y={y} width={width} height={height} />
        return <Sprite filename="./hangman.png" x={x} y={y} width={width} height={height} />
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HangmanSprites);