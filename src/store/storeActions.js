const createEnum = (...values) =>
  Object.freeze({
    ...values.reduce(
      (total, current) => ({ ...total, [current]: current }),
      {}
    ),
  });

export const counterActions = createEnum(
  "INCREMENT",
  "DECREMENT",
  "ADD",
  "SUBTRACT",
  "STORE_RESULT",
  "DELETE_RESULT"
);
