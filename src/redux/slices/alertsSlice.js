import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  alerts: [
    {
      id: 'alert1',
      deviceId: 'DEV-001',
      date: '2024-05-10',
      type: 'Battery Low',
      description: 'Battery below 20%.',
      photo: 'battery_low.jpg',
      status: 'Open'
    },
    {
      id: 'alert2',
      deviceId: 'DEV-002',
      date: '2024-05-12',
      type: 'Physical Damage',
      description: 'Crack on device casing.',
      photo: 'damage_photo.jpg',
      status: 'Resolved'
    }
  ],
};

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,
  reducers: {
    addAlert: (state, action) => {
      state.alerts.push(action.payload);
    },
    updateAlert: (state, action) => {
      const index = state.alerts.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.alerts[index] = action.payload;
      }
    },
    deleteAlert: (state, action) => {
      state.alerts = state.alerts.filter(a => a.id !== action.payload);
    },
    setAlerts: (state, action) => {
      state.alerts = action.payload;
    },
  },
});

export const { addAlert, updateAlert, deleteAlert, setAlerts } = alertsSlice.actions;
export default alertsSlice.reducer; 