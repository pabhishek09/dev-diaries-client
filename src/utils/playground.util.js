import * as Babel from '@babel/standalone/babel.min';

const transpileCode = (str) => {
  let transpiledCode;
  try {
    transpiledCode = Babel.transform(str, { presets: ['es2015'] }).code;
  } catch (err) {
    console.log('Transpilation error', err);
  }
  return transpiledCode;
}

const execute = (code) => {
  try {
    const transpiledCode = transpileCode(code);
    (getFunctionFromSnippet(transpiledCode))();
  } catch (err) {
    console(err);
  }
};

const evaluate = (code, name, expectations) => {
  try {
    const transpiledCode = transpileCode(code);
    const returnFnSnippet = `return ${name}`;
    const wrapperFn = getFunctionFromSnippet(transpiledCode.concat(returnFnSnippet));
    const fnInstance = wrapperFn();
    expectations.forEach((expectation) => {
      const output = fnInstance.apply(null, expectation.arg);
      if (expectation.ret === output) {
        console.log('Test case passed for', expectation.arg);
      } else {
        console.log('Test case failed for', expectation.arg);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const getFunctionFromSnippet = function(snippet) {
  // eslint-disable-next-line
  return new Function(snippet);
}

export { evaluate, execute };
