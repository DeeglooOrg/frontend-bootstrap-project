export const changeRandomMessage = (message: string) => {
  return {
    type: 'CHANGE_MESSAGE',
    payload: message,
  };
};
