import { ActionTypes } from '../../../domain/enums'

export const changeRandomMessage = (message: string) => {
  return {
    type: ActionTypes.CHANGE_MESSAGE,
    payload: message,
  };
};
