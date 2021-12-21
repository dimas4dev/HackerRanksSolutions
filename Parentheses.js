function solution(s) {
  const arrayParentheses = [...s];
  const arrayBalanced = [];

  for (let index = 0; index < arrayParentheses.length; index++) {
    const element = arrayParentheses[index];

    if (element == "(") {
      arrayBalanced.push(element);
    } else {
      return false;
    }
  }
}

solution("()()()()()");
