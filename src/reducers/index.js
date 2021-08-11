

const initialState = {
    //TODO : complete players {} and monster{}
    players: {
        1: { name: "Elea", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, photo: "./images/elea.jpg"},
        2: { name: "Jean", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, photo: "./images/jean.jpg" },
        3: { name: "Julien", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, photo: "./images/julien.jpg" },
        4: { name: "Basile", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, photo: "./images/basile.jpg" },
        5: { name: "Maxime", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 5 , photo: "./images/maxime.jpg"}
      },
    monster: {
         name: "Hamza (boss)", pv: 300, pvMax: 500 },
     
  };
   
  function rootReducer(state = initialState, action) {

    let newState;

    if (action.type === 'HIT_MONSTER') {

      // NEWSTATE est une copie de initialState grace aux '...'
      newState = {
        ...state,
        monster : {...state.monster,  pv:state.monster.pv + action.payload}
      }
      return  newState;
         
    }



    if (action.type === 'HIT_BACK') {

      // NEWSTATE est une copie de initialState grace aux '...'
      newState = {
        ...state,
        players : {
            ...state.players,
            [action.payload.id]: {
                ...state.players [action.payload.id],
                pv:state.players [action.payload.id].pv + action.payload.degats
            }
        }
    }
      return  newState;
         
    }

    return state;

  };



  export default rootReducer;
  