import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contracts: [
    {
      id: 'amc1',
      deviceId: 'DEV-001',
      contractType: 'AMC',
      startDate: '2024-01-01',
      endDate: '2025-01-01',
      provider: 'MedTech Services',
      status: 'Active',
      notes: 'Includes preventive maintenance.'
    },
    {
      id: 'cmc1',
      deviceId: 'DEV-002',
      contractType: 'CMC',
      startDate: '2023-07-01',
      endDate: '2024-07-01',
      provider: 'BioCare Solutions',
      status: 'Expiring Soon',
      notes: 'Renewal required.'
    }
  ],
};

const contractsSlice = createSlice({
  name: 'contracts',
  initialState,
  reducers: {
    addContract: (state, action) => {
      state.contracts.push(action.payload);
    },
    updateContract: (state, action) => {
      const index = state.contracts.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state.contracts[index] = action.payload;
      }
    },
    deleteContract: (state, action) => {
      state.contracts = state.contracts.filter(c => c.id !== action.payload);
    },
    setContracts: (state, action) => {
      state.contracts = action.payload;
    },
  },
});

export const { addContract, updateContract, deleteContract, setContracts } = contractsSlice.actions;
export default contractsSlice.reducer; 