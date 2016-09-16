// require all testing files
const testsContext = require.context('./src', true, /.*test\.js$/)

testsContext.keys().forEach(testsContext)

// require all app files
const componentsContext = require.context('../src/js/', true, /\.js$/)

componentsContext.keys().forEach(componentsContext)
