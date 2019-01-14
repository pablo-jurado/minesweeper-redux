export const RIGHT_CLICK = "RIGHT_CLICK";
export const LEFT_CLICK = "LEFT_CLICK";

export const rightClick = (x, y) => ({
  type: RIGHT_CLICK,
  payload: { x, y }
});

export const leftClick = (x, y) => ({
  type: LEFT_CLICK,
  payload: { x, y }
});
