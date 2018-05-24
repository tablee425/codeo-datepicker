import { createReducer, createActions } from 'reduxsauce';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  updateHeightOfInput: ['height'],
});

export const ChatTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

const defaultState = {
  height: 100,
};

/* ------------- Reducers ------------- */
const updateHeightOfInput = (state, { height }) => ({
  ...state, height
});

export const chatReducer = createReducer(defaultState, {
  [Types.UPDATE_HEIGHT_OF_INPUT]: updateHeightOfInput,
});
