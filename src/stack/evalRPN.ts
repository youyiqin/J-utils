import Stack from "./Stack";

const evalRPN = (tokens: string[]): number => {
  const stack = new Stack(100);
  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case "+":
        stack.push(stack.pop() + stack.pop());
        break;
      case "-":
        stack.push(-stack.pop() + stack.pop());
        break;
      case "*":
        stack.push(stack.pop() * stack.pop());
        break;
      case "/":
        stack.push(~~((1 / stack.pop()) * stack.pop()));
        break;
      default:
        stack.push(~~tokens[i]);
        break;
    }
  }
  return ~~stack.peek();
};

export default evalRPN;
