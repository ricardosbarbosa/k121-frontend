import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
         loadMembersSuccess: ["payload"],
         saveMemberSuccess: ["payload"],
         updateMemberSuccess: ["payload"],
         destroyMemberSuccess: ["payload"],
         selectMember: ["member"],
         clearMembers: []
       });

// operations
export function loadMembers(sorteioId) {
  return {
    types: ["LOAD", Types.LOAD_MEMBERS_SUCCESS, "OH_NO"],
    payload: {
      request: {
        url: `/sorteios/${sorteioId}/members`
      }
    }
  };
}

export function saveMember(member, sorteioId) {
  return {
    types: ["POST", Types.SAVE_MEMBER_SUCCESS, "OH_NO"],
    payload: {
      request: { method: "POST", url: `/sorteios/${sorteioId}/members`, data: { ...member, sorteio: sorteioId } }
    },
  };
}

export function updateMember(member, sorteioId) {
  return {
    types: ["PUT", Types.UPDATE_MEMBER_SUCCESS, "OH_NO"],
    payload: {
      request: { method: "PUT", url: `/sorteios/${sorteioId}/members/${member._id}`, data: { ...member } }
    }
  };
}

export function destroyMember(member, sorteioId) {
  return {
    types: ["DELETE", Types.DESTROY_MEMBER_SUCCESS, "OH_NO"],
    payload: {
      id: member._id,
      request: { method: "DELETE", url: `/sorteios/${sorteioId}/members/${member._id}` }
    }
  };
}

const INITIAL_STATE = {
  list: [],
  selected: null
};

const clear = (state = INITIAL_STATE, action) => {
  return INITIAL_STATE;
};

const load = (state = INITIAL_STATE, action) => {
  return { ...state, list: action.payload.data };
};

const add = (state = INITIAL_STATE, action) => {
  return { ...state, list: [...state.list, action.payload.data], selected: null };
};

const update = (state = INITIAL_STATE, action) => {
  return {
    ...state, list: state.list.map(p => {
      if (p._id === action.payload.data._id) return action.payload.data;
      return p;
    }), selected: null };
};

const remove = (state = INITIAL_STATE, action) => {
  return { ...state, list: state.list.filter(p => {
    return p._id !== action.payload.config.reduxSourceAction.payload.id;
  }) };
};

const select = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    selected: action.member
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.LOAD_MEMBERS_SUCCESS]: load,
  [Types.SAVE_MEMBER_SUCCESS]: add,
  [Types.UPDATE_MEMBER_SUCCESS]: update,
  [Types.DESTROY_MEMBER_SUCCESS]: remove,
  [Types.SELECT_MEMBER]: select,
  [Types.CLEAR_MEMBERS]: clear
});
