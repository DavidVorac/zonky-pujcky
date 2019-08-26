export const changeApiData = (payload, type = "SET_DATA") => {
  return {
    type: type,
    payload
  };
};
