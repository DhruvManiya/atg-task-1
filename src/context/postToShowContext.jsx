const { createContext } = require("react");

const postToShowContext = createContext({
    status: '',
    setStatus: () => {}
});

export default postToShowContext;