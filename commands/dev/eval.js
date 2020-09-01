module.exports = {
    name: "eval",
    description: "evaluates a javascript block of code - only for developers",
    devOnly: true,
    category: "dev",
    run: async (client, message, args) => {
        const _eval = require('djs-eval');
        const _evalCommand = new _eval.Eval(['429033088618594309'], 'en');
        _evalCommand.run(message, {client: client, args: args, message: message});
    }
}