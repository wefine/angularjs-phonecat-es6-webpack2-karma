const context = require.context('./src/app', true, /\.[Ss]pec.js$/);
context.keys().forEach(context);

