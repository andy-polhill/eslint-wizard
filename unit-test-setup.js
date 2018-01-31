// Below is to stop React 16 spewing warnings to the console
// It can be removed after the issue has been fixed
global.requestAnimationFrame = setTimeout;

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });
