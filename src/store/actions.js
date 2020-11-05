const createEnum = (...values) =>
  Object.freeze({
    ...values.reduce(
      (total, current) => ({ ...total, [current]: current }),
      {}
    ),
  });

export const personActions = createEnum("ADD", "REMOVE");
