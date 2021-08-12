

const initialState = {
    //TODO : complete players {} and monster{}
    players: {
        1: { played: false, name: "Elea", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1, photo: "./images/elea.jpg"},
        2: { played: false, name: "Jean", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2, photo: "./images/jean.jpg" },
        3: { played: false, name: "Julien", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3, photo: "./images/julien.jpg" },
        4: { played: false, name: "Basile", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4, photo: "./images/basile.jpg" },
        5: { played: false, name: "Maxime", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 5 , photo: "./images/maxime.jpg"}
      },
      countPlayerTurn: 1,

    monster: {
         name: "Hamza (boss)", pv: 500, pvMax: 500 },
     
  };


  function rootReducer(state = initialState, action) {

      let newState;

      if (action.type === 'HIT_MONSTER') {
          newState = {
              ...state,
              monster: { ...state.monster, pv: state.monster.pv + action.payload }
          };
          return newState;
      }
  
      if (action.type === 'HIT_BACK') {
          newState = {
              ...state,
              players: {
                  ...state.players,
                  [action.payload.id]: {
                      ...state.players[action.payload.id],
                      pv: state.players[action.payload.id].pv + action.payload.degats,
                      played: state.players[action.payload.id].played = true
                  }
              },
          };
          
          return newState;
      }

      if (action.type === 'HYPER_HIT') {
        newState = {
            ...state,
            players: {
                ...state.players,
                [action.payload.id]: {
                    ...state.players[action.payload.id],
                    monster: { ...state.monster, pv: state.monster.pv + action.payload },
                    mana: state.players[action.payload.id].mana + action.payload.mana,
                    played: state.players[action.payload.id].played = true
                }
            },
        };
        
        
        return newState;
        }

        if (action.type === 'MANA_RELOAD') {
            newState = {
                ...state,
                players: {
                    ...state.players,
                    [action.payload.id]: {
                        ...state.players[action.payload.id],
                        mana: state.players[action.payload.id].mana + action.payload.mana,
                        played: state.players[action.payload.id].played = true
                    }
                },
            };
            
            
            return newState;
            }
  
      if (action.type === "RESET_COUNT") {
          newState = {
              ...state,
              countPlayerTurn: 1,
              players: {
                  ...state.players,
                  [action.payload.id]: {
                      ...state.players[action.payload.id],
                      played: state.players[action.payload.id].played = false
                  }
              },
          }
          return newState
      }
  
      if (action.type === "INCREMENT") {
          newState = {
              ...state,
              countPlayerTurn: state.countPlayerTurn + 1
          };
          return newState
      };
  
      return state;
  };
  
  
  export default rootReducer;