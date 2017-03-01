const context = require.context('./src', true, /\.[Ss]pec.js$/);
context.keys().forEach(context);

