import React from 'react';
import { connect } from 'react-redux';
import { resetPlayed, increment, ManaReload } from '../actions';



const mapDispatchToProps = (dispatch) => {
    return {
       ManaReloads: (payload) => dispatch(ManaReload(payload)),
       resetPlayersTurn: (payload) => dispatch(resetPlayed(payload)),
       CounterIncrement: () => dispatch(increment())
    };
}


 
const ManaConnect = ({ players, countPlayerTurn, CounterIncrement, resetPlayersTurn, props, monster, ManaReloads }) => {


    const combat = () => {

        ManaReloads({mana: +10, id:props.player.id})
        CounterIncrement();

        if (countPlayerTurn === Object.keys(players).length) {
            Object.keys(players).map((key) => {
                resetPlayersTurn({ id: key })
            })
        }
    }

    function displayButton(){
        
        if ((props.player.played) || (props.player.pv === 0) || (monster.pv === 0) || ( props.player.mana === 30)) {
            return (
                <button disabled={true} type="button"  className=" hit btn btn-success material-tooltip-main"  >   
                    <i className="fas fa-bomb"></i> MANA MAX
                    <i className="fas fa-fire-alt"></i> 
                </button>

            )
        } 
        
        else {
            return (
                <button type="button" onClick={() => combat()} className="hit btn btn-success material-tooltip-main ">
                    <i className="fas fa-bomb"></i> RELOAD MANA
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
 
export default connect( mapStateToProps, mapDispatchToProps )(ManaConnect);
