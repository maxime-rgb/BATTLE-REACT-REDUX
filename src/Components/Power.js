import React from 'react';
import { connect } from 'react-redux';
import { hitMonster, hitBack, resetPlayed, increment, hyperHit } from '../actions';



const mapDispatchToProps = (dispatch) => {
    return {
       hitMonsters: (payload) => dispatch(hitMonster(payload)),
       hyperHits: (payload) => dispatch(hyperHit(payload)),
       hitBacks: (payload) => dispatch(hitBack(payload)),
       resetPlayersTurn: (payload) => dispatch(resetPlayed(payload)),
       CounterIncrement: () => dispatch(increment())
    };
}


 
const PowerConnect = ({ players, countPlayerTurn, CounterIncrement, resetPlayersTurn, hitMonsters, hyperHits, props, monster }) => {


    const combat = () => {


        hitMonsters (-30)
        hyperHits({mana: -10, id:props.player.id})
        CounterIncrement();

        if (countPlayerTurn === Object.keys(players).length) {
            Object.keys(players).map((key) => {
                resetPlayersTurn({ id: key })
            })
        }
    }

    function displayButton(){
        
        if ((props.player.played) || (props.player.pv === 0) || (monster.pv === 0)) {
            return (
                <button disabled={true} type="button"  className=" hit btn btn-success material-tooltip-main"  >   
                    <i className="fas fa-bomb"></i> RELOAD POWER
                    <i className="fas fa-fire-alt"></i> 
                </button>

            )
        } 
        
        else {
            return (
                <button type="button" onClick={() => combat()} className="hit btn btn-success material-tooltip-main ">
                    <i className="fas fa-bomb"></i> USE POWER
                    <i className="fas fa-fire-alt"></i> 
                </button>

            )
        }   
    }  
    return(displayButton())   
}

const mapStateToProps = (state, props) => {
    return { 
        monster : state.monster,
        players : state.players,
        props : props,        
        countPlayerTurn: state.countPlayerTurn
  
    }
  };
 
export default connect( mapStateToProps, mapDispatchToProps )(PowerConnect);
