const updateState = (previousState, updatedValues) => ({
  ...previousState,
  ...updatedValues,
});

export { updateState };
