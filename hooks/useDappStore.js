//import zus from 'zustand';
import create from 'zustand';

const useDappStore = create((set) => ({
    account: null,
    setAccount: (account) => set({ account }),
}));

export default useDappStore;