export function isEmail(value) {
  return value.includes("@");
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function hasPassMinLength(value) {
  return value.length >= 5;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}
