export const RIGHT_CLICK = "RIGHT_CLICK";

export const rightClick = (x, y) => ({
  type: RIGHT_CLICK,
  payload: { x, y }
});
