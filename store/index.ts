import { create } from "zustand";

interface Store {
  userState: "loading" | "user" | "unavailable";
  updateUserState: (by: "loading" | "user" | "unavailable") => void;
}

const useStore = create<Store>((set) => ({
  userState: "loading",
  updateUserState: (userState: "loading" | "user" | "unavailable") =>
    set({ userState: userState }),
}));

export { useStore };
