import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
         awesome: ["payload"],
         savePessoaSuccess: ["payload"],
         updatePessoaSuccess: ["payload"],
         destroyPessoaSuccess: ["payload"],
         postSorteioSuccess: ["payload"],
         revelar: ["pessoa"],
         selecionar: ["pessoa"]
       });

// operations
export function loadPessoas() {
  return {
    types: ["LOAD", "AWESOME", "OH_NO"],
    payload: {
      request: {
        url: "/pessoas"
      }
    }
  };
}

export function savePessoa(pessoa) {
  return {
    types: ["POST", Types.SAVE_PESSOA_SUCCESS, "OH_NO"],
    payload: {
      request: { method: "POST", url: "/pessoas", data: { ...pessoa } }
    },
  };
}

export function updatePessoa(pessoa) {
  return {
    types: ["PUT", Types.UPDATE_PESSOA_SUCCESS, "OH_NO"],
    payload: {
      request: { method: "PUT", url: `/pessoas/${pessoa._id}`, data: { ...pessoa } }
    }
  };
}

export function destroyPessoa(pessoa) {
  return {
    types: ["DELETE", Types.DESTROY_PESSOA_SUCCESS, "OH_NO"],
    payload: {
      request: { method: "DELETE", url: `/pessoas/${pessoa._id}` }
    }
  };
}

export function createSorteio() {
  return {
    types: ["POST_SORTEIO", Types.POST_SORTEIO_SUCCESS, "OH_NO"],
    payload: {
      request: { method: "POST", url: `/pessoas/sorteio` }
    }
  };
}

const INITIAL_STATE = {
  list: [],
  selecionado: null,
  revelado: null
};

const awesome = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    list: action.payload.data
  }
}
const add = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    list: [...state.list, action.payload.data]
  }
};
const update = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    list: state.list.map(p => {
      if (p._id === action.payload.data._id) 
        return action.payload.data
      return p;
    }),
    selecionado: null,
  };
};
const remove = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    list: state.list.filter(p => p._id !== action.payload.data)
  }
};
const sorteia = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    list: action.payload.data
  }
};
const revela = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    revelado: action.pessoa
  };
};
const seleciona = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    selecionado: action.pessoa
  };
};

export default createReducer(INITIAL_STATE, {
  ["AWESOME"]: awesome,
  [Types.SAVE_PESSOA_SUCCESS]: add,
  [Types.UPDATE_PESSOA_SUCCESS]: update,
  [Types.DESTROY_PESSOA_SUCCESS]: remove,
  [Types.POST_SORTEIO_SUCCESS]: sorteia,
  [Types.REVELAR]: revela,
  [Types.SELECIONAR]: seleciona
});


