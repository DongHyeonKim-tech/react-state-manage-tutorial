import { create } from "zustand";
import {
  CategoryDataType,
  CountStoreType,
  CategoryStateType,
  MenuStateType,
} from "@/app/AdminInterface";
import { iisClient, djangoClient } from "../api/client";
import { persist } from "zustand/middleware";

export const useCountStore = create<CountStoreType>((set) => ({
  count: 0,
  increment: () =>
    set((state: { count: number }) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state: { count: number }) => ({ count: state.count - 1 })),
}));

export const useDataStore = create<CategoryStateType>((set) => ({
  data: [],
  removeData: (key: number) =>
    set((state: { data: CategoryDataType[] }) => ({
      data: state.data.filter((item) => item.key !== key),
    })),
  insertData: (data: CategoryDataType) =>
    set((state: { data: CategoryDataType[] }) => ({
      data: [...state.data, data],
    })),
  updateData: (data: CategoryDataType) =>
    set((state: { data: CategoryDataType[] }) => ({
      data: state.data.map((item) => {
        if (item.key === data.key) return data;
        return item;
      }),
    })),
}));

export const useMenuStore = create(
  persist<MenuStateType>(
    (set) => ({
      data: null,
      isLoading: false,
      error: null,
      fetchData: async () => {
        set({ isLoading: true });
        try {
          const response = await djangoClient.get("/bim-mng/menu-list");
          const data = await response.data;
          set({ data, isLoading: false });
        } catch (error) {
          set({ error, isLoading: false });
        }
      },
    }),
    { name: "menu-storage", getStorage: () => sessionStorage }
  )
);

const barExecutionData = [
  { key: 1, category: "계획", all: 61, bim: 0 },
  { key: 2, category: "중간", all: 90, bim: 0 },
  { key: 3, category: "실시", all: 365, bim: 67 },
];
