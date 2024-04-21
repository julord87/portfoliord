export const initialState = {
    modal: false
  };
  
export const modalReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modal: !state.modal,
        data: null // Limpiar los datos del modal al cerrarlo
      };
    case 'OPEN_MODAL':
      return {
        ...state,
        modal: true,
        data: action.payload // Almacenar los datos adicionales en el estado del modal
      };
    default:
      return state;
  }
};
  