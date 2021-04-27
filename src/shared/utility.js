export const updateObject = (oldObject, newObject) => {
  return {
    ...oldObject,
    ...newObject,
  };
};
export const checkValidity = (value, rules) => {
  let isValid = false;
  if (rules.required) {
    isValid = value.trim() !== "";
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength;
    if (rules.maxLength && isValid) {
      isValid = value.length <= rules.maxLength;
      if (!isValid) console.log("max length reached");
    }
  }
  return isValid;
};
