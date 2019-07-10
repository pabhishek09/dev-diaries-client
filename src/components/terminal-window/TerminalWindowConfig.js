const description = {
  sub: 'Submit your solution'
};

const msg = 'Run sub to submit, help to view all commands. Console logs are enabled.';

const style = {
  fontSize: "1em"
};

const commandPassThrough = (cmd) => `-bash: ${cmd}: command not found, run help to view all commands`;

export { description, commandPassThrough, msg, style } ;
