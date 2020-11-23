export const updateState = ( previousState, updatedValues ) => ({
    ...previousState,
    ...updatedValues,
});