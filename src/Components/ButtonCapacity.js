import React from 'react';
import { connect } from 'react-redux';
import { hitMonster, hitBack  } from '../actions';
import PlayerList from './PlayerList';




const mapDispatchToProps = (dispatch) => {
    return {
       hitMonsters: (payload) => dispatch(hitMonster(payload)),
       hitBacks: (payload) => dispatch(hitBack(payload))
    };
}


 
const ButtonCapacityConnect = ({hitMonsters, hitBacks, props, monster}) => {


    const combat = () => {
        hitMonsters (-10)
        hitBacks ({degats: -5, id: props.player.id})
        console.log('aie !')
    }

            
    if ((props.player.pv === 0) || (monster.pv === 0)) {
        return (
            <button disabled={true} type="button" onClick={() => combat()} className=" hit btn btn-success material-tooltip-main ">
                
                <i className="fas fa-bomb"></i> 
                <i className="fas fa-fire-alt"></i> 
            </button>
        )
    } 
    
    else {
        return (
            <button type="button" onClick={() => combat()} className="hit btn btn-success material-tooltip-main ">
                
                <i className="fas fa-bomb"></i> 
                <i className="fas fa-fire-alt"></i> 
            </button>
        )
    }  
}





const mapStateToProps = (state, props) => {
    return { 
        monster : state.monster,
        players : state.player,
        props : props
    };
  };
 
export default connect( mapStateToProps, mapDispatchToProps )(ButtonCapacityConnect);
