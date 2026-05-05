import { createSlice } from "@reduxjs/toolkit";

const initialMembers = [
  { id: 101, name: "Asha Patel", status: "working" },
  { id: 102, name: "Daniel Kim", status: "working" },
  { id: 103, name: "Maria Lopez", status: "break" },
  { id: 104, name: "Omar Ali", status: "working" },
  { id: 105, name: "Lina Chen", status: "offline" }
];

const membersSlice = createSlice({
  name: "members",
  initialState: initialMembers,
  reducers: {
    setMemberStatus(state, action) {
      const { id, status } = action.payload;
      const m = state.find(x => x.id === id);
      if (m) m.status = status;
    },
    updateMemberTask(state, action) {
      const { id, task } = action.payload;
      const m = state.find(x => x.id === id);
      if (m) m.task = task;
    },
    addMember(state, action) {
      state.push(action.payload);
    },
    resetMembers() {
      return initialMembers;
    },
    setMembers(state, action) {
      return action.payload;
    }
  }
});

export const { setMemberStatus, updateMemberTask, addMember, resetMembers, setMembers } = membersSlice.actions;
export default membersSlice.reducer;
