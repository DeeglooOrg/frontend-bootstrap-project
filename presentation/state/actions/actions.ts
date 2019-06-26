import { ActionTypes } from '../../../domain/enums'

export const changeRandomMessage = (message: string) => {
  return {
    type: ActionTypes.CHANGE_MESSAGE,
    payload: message,
  };
};

export const incrementNumber = () => {
  return {
    type: ActionTypes.INCREMENT_NUMBER
  }
}
