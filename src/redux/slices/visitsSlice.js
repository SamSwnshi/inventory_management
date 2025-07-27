import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visits: [
    {
      id: 'visit1',
      deviceId: 'DEV-001',
      date: '2024-05-01',
      engineer: 'Alice Smith',
      purpose: 'Preventive',
      notes: 'Routine check. All parameters normal.',
      attachments: ['service_report1.pdf']
    },
    {
      id: 'visit2',
      deviceId: 'DEV-002',
      date: '2024-05-05',
      engineer: 'Bob Lee',
      purpose: 'Breakdown',
      notes: 'Battery replaced. Device back online.',
      attachments: []
    }
  ],
};

const visitsSlice = createSlice({
  name: 'visits',
  initialState,
  reducers: {
    addVisit: (state, action) => {
      state.visits.push(action.payload);
    },
    updateVisit: (state, action) => {
      const index = state.visits.findIndex(v => v.id === action.payload.id);
      if (index !== -1) {
        state.visits[index] = action.payload;
      }
    },
    deleteVisit: (state, action) => {
      state.visits = state.visits.filter(v => v.id !== action.payload);
    },
    setVisits: (state, action) => {
      state.visits = action.payload;
    },
  },
});

export const { addVisit, updateVisit, deleteVisit, setVisits } = visitsSlice.actions;
export default visitsSlice.reducer; 