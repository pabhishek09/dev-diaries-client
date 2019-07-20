import * as Babel from '@babel/standalone/babel.min';
import _reduce from 'lodash/reduce';
import _forEach from 'lodash/forEach';

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

const getFunctionFromSnippet = function(snippet) {
  // eslint-disable-next-line
  return new Function(snippet);
}

const getFnDefaultCode = (fnSignature) => {
  console.log(fnSignature);
  let fnParamsDoc = '';
  _forEach(fnSignature.params, (param, index) => {
    fnParamsDoc = fnParamsDoc.concat(`* @param {${param.type}}  ${param.name}  ${param.desc}`);
    if (fnSignature.params.length !== (index + 1)) {
      fnParamsDoc = fnParamsDoc.concat('\n');
    }
  });
  const commentedDoc = 
`/**
${fnParamsDoc}
*/
`;
  const fnParamsSignature = _reduce(fnSignature.params, (paramSig, param, index) => {
    let accumulatedSig = paramSig + param.name;
    if (fnSignature.params.length !== (index + 1)) {
      accumulatedSig = accumulatedSig.concat(', ');
    }
    return accumulatedSig;
  }, "");
  const fnCode = `
function ${fnSignature.fnName} (${fnParamsSignature}) {

}
  `;
  return commentedDoc.concat(fnCode);
}

export { execute, getFnDefaultCode };
