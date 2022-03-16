export function evaluate(data: string): string {
  let arr = data.match(/\d+\.?\d+|x|\*|\/|-|÷|\+|\d+/g)!;
  console.log(arr);
  arr = operations(arr, 'high');
  arr = operations(arr, 'low');
  if (arr[0] === "NaN") return "Syntax Error";

  return String(arr);
}

export function operations(arr: string[], order: string): any {
  const operators: string[] = order === "high" ? ['x', '÷', '*', '/'] : ['+', '-'];
  const index = arr.findIndex(el => operators.includes(el));
  if (index === -1)
    return arr;

  const operator = arr[index];
  arr[index + 1] = String(math_it_up[operator](arr[index - 1], arr[index + 1]));
  arr[index - 1] = '';
  arr[index] = '';
  arr = arr.filter(el => el !== '');

  return operations(arr, order);
}

type tMath = {
  [key: string]: (a: string, b: string) => number
}

export const math_it_up: tMath = {
  '+': (a, b) => +a + +b,
  '-': (a, b) => +a - +b,
  'x': (a, b) => +a * +b,
  '*': (a, b) => +a * +b,
  '÷': (a, b) => +a / +b,
  '/': (a, b) => +a / +b
}