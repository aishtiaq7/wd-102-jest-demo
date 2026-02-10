export function shout(message, logFun) {
  if (typeof logFun !== "function") {
    throw new Error("logFun must be a function");
  }
  const result = String(message).toUpperCase();
  logFun(result); // console.log("HELLO");
  return result;
}

export function sumAndNotify(a, b, notifyFn) {
  if (typeof notifyFn !== "function") {
    throw new Error("notifyFn must be a function");
  }
  const sum = a + b;
  notifyFn(sum);
  return sum;
}

// console.log( typeof "sdfijwoefhwoiehf");

export function repeatMessage(message, times, logFun) {
  if (typeof logFun !== "function") {
    throw new Error("logFun must be a function");
  }

  if (!Number.isInteger(times) || times < 0) {
    throw new Error("times must be a non-negative integer");
  }

  for (let i = 0; i < times; i++) {
    logFun(message);
  }
  return times;
}

export function buildGreeting(name, formatFn) {
  const formatter =
    typeof formatFn === "function" ? formatFn : (n) => `Hello,${n}!`;

  return formatter(name);
}
