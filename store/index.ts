import createStore from "./create-store";

import state from "./state";
import reducer from "./reducer";

export const useStore = createStore(reducer, state);
