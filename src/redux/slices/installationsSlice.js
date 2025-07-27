import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    installations: [
        {
            id: 'inst1',
            deviceId: 'DEV-001',
            facility: 'City Hospital',
            date: '2024-04-01',
            engineer: 'Alice Smith',
            checklistCompleted: true,
            trainingCompleted: true,
            unboxingPhotos: ['photo1.jpg'],
            notes: 'Installed successfully. Training provided to staff.'
        },
        {
            id: 'inst2',
            deviceId: 'DEV-002',
            facility: 'Green Valley Clinic',
            date: '2024-04-10',
            engineer: 'Bob Lee',
            checklistCompleted: false,
            trainingCompleted: false,
            unboxingPhotos: [],
            notes: 'Installation pending checklist.'
        }
    ]
}

const installationsSlice = createSlice({
  name: 'installations',
  initialState,
  reducers: {
    addInstallation: (state, action) => {
      state.installations.push(action.payload);
    },
    updateInstallation: (state, action) => {
      const index = state.installations.findIndex(i => i.id === action.payload.id);
      if (index !== -1) {
        state.installations[index] = action.payload;
      }
    },
    deleteInstallation: (state, action) => {
      state.installations = state.installations.filter(i => i.id !== action.payload);
    },
    setInstallations: (state, action) => {
      state.installations = action.payload;
    },
  },
});

export const { addInstallation, updateInstallation, deleteInstallation, setInstallations } = installationsSlice.actions;
export default installationsSlice.reducer; 