import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from "./types";

export const initialState = {
    messages: [], 
    username: 'Annonymous',
    reactionsMap: {}
};

const REACTION_TYPES = REACTION_OBJECTS.map(
    REACTION_OBJECT => REACTION_OBJECT.type
  );

const reducer = (state, action) => {
    if (REACTION_TYPES.includes(action.type)) {
        let reactionsMap;
        const { messageId } = action.item;
        console.log('messageId', messageId);
        const messageReactions = state.reactionsMap[messageId];
        console.log('messageReactions', messageReactions);
    
        if (messageReactions) {
          reactionsMap = {
            ...state.reactionsMap,
            [messageId]: [...messageReactions, action.item] //override the existing messageId array
          }
        } else {
          reactionsMap = {
            ...state.reactionsMap,
            [messageId]: [action.item]
          }
        }

        console.log('reactionsMap', reactionsMap);
        return { ...state, reactionsMap };
    }
    switch(action.type) {
        case SET_USERNAME:
            return {...state, username: action.username}
        case NEW_MESSAGE:
            return {...state, messages: [...state.messages, action.item]}
        
        default:
            return state;
    }
}

export default reducer;