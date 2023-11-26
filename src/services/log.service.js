class LogService {
  clearWarnings(texts = []) {
    const warn = console.warn;
    texts.forEach((text) => {
      console.warn = (...args) => {
        if (typeof args[0] === 'string' && args[0].startsWith(text)) {
          return;
        }
        warn(...args);
      };
    });
  }

  clearConsoleLog(envs = []) {
    // if (envs.includes(process.env.REACT_APP_ENV)) {
    //   console.log = function () {};
    // }
  }
}

export default LogService;
