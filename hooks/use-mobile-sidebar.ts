import { create } from 'zustand';

type MobileSidebarStoreType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMobileSidebar = create<MobileSidebarStoreType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
