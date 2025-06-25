// store/useSettingsStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  is3DEnabled: boolean;
  setIs3DEnabled: (value: boolean) => void;
  theme: string;
  setTheme: (theme: string) => void;
}

const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      is3DEnabled: true, // Default value
      setIs3DEnabled: (value: boolean) => set({ is3DEnabled: value }),
      
      // You can add other settings here as well
      theme: 'dark', // Default theme
      setTheme: (theme: string) => set({ theme }),
    }),
    {
      name: 'settings-storage', // unique name for localStorage key
    }
  )
);

export default useSettingsStore;