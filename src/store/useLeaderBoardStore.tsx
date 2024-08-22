import { create } from 'zustand';

type LeaderBoardState = {
    selected: 'This Month' | 'All Time';
};

type LeaderBoardActions = {
    setSelected: (selected: 'This Month' | 'All Time') => void;
}


export const useLeaderBoardStore = create<LeaderBoardState & LeaderBoardActions>((set) => ({
    selected: 'This Month',
    setSelected: (selected) => set({ selected })
}));