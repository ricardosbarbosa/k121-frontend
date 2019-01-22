import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
        testSorteioSuccess: ["payload"],
        performSorteioSuccess: ["payload"],
        loadSorteiosSuccess: ["payload"],
        saveSorteioSuccess: ["payload"],
        updateSorteioSuccess: ["payload"],
        destroySorteioSuccess: ["payload"],
        selectSorteio: ["sorteio"]
      });

// operations
export function testSorteio(sorteioId) {
  return {
    types: ["LOAD", Types.TEST_SORTEIO_SUCCESS, "OH_NO"],
    payload: {
      request: {
        url: `/sorteios/${sorteioId}/test`
      }
    }
  };
}

export function loadSorteios() {
  return {
    types: ["LOAD", Types.LOAD_SORTEIOS_SUCCESS, "OH_NO"],
    payload: {
      request: {
        url: "/sorteios"
      }
    }
  };
}

export function saveSorteio(sorteio) {
  return {
    types: ["POST", Types.SAVE_SORTEIO_SUCCESS, "OH_NO"],
    payload: {
      request: { method: "POST", url: "/sorteios", data: { ...sorteio } }
    },
  };
}

export function updateSorteio(sorteio) {
  return {
    types: ["PUT", Types.UPDATE_SORTEIO_SUCCESS, "OH_NO"],
    payload: {
      request: { method: "PUT", url: `/sorteios/${sorteio._id}`, data: { ...sorteio } }
    }
  };
}

export function destroySorteio(sorteio) {
  return {
    types: ["DELETE", Types.DESTROY_SORTEIO_SUCCESS, "OH_NO"],
    payload: {
      id: sorteio._id,
      request: { method: "DELETE", url: `/sorteios/${sorteio._id}` }
    }
  };
}

export function performSorteio(sorteioId) {
  return {
    types: ["POST_SORTEIO", Types.POST_SORTEIO_SUCCESS, "OH_NO"],
    payload: {
      request: { method: "POST", url: `/sorteios/${sorteioId}/result` }
    }
  };
}

const INITIAL_STATE = {
  list: [],
  testResult: [],
  selected: null
};

const clear = (state = INITIAL_STATE, action) => {
  return INITIAL_STATE;
};

const load = (state = INITIAL_STATE, action) => {
  return { ...state, list: action.payload.data };
};

const test = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    testResult: action.payload.data
  };
};

const add = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    list: [...state.list, action.payload.data], 
    selected: action.payload.data 
  };
};

const update = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    list: state.list.map(p => {
      if (p._id === action.payload.data._id) return action.payload.data;
      return p;
    }), 
    selected: action.payload.data 
  };
};

const remove = (state = INITIAL_STATE, action) => {
  return { 
    ...state, 
    list: state.list.filter(p => p._id !== action.payload.config.reduxSourceAction.payload.id),
    selected: null
  };
};

const select = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    selected: action.sorteio
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.TEST_SORTEIO_SUCCESS]: test,
  [Types.PERFORM_SORTEIO_SUCCESS]: clear,
  [Types.LOAD_SORTEIOS_SUCCESS]: load,
  [Types.SAVE_SORTEIO_SUCCESS]: add,
  [Types.UPDATE_SORTEIO_SUCCESS]: update,
  [Types.DESTROY_SORTEIO_SUCCESS]: remove,
  [Types.SELECT_SORTEIO]: select
});
