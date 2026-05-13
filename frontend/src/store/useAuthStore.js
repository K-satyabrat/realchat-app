import { create } from "zustand";
import axiosInstance from "../lib/axios";
import { toast } from "react-hot-toast";

const useAuthStore = create((set) => ({
  authUser: null,
  isCheckingAuth: true,
  isSignUp: false,
  isLogin: false,

  checkAuth: async () => {
    try {
      const response = await axiosInstance.get("/auth/check");
      set({ authUser: response.data });
    } catch (error) {
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (user) => {
    set({ isSignUp: true });
    try {
      const response = await axiosInstance.post("/auth/signup", user);
      set({ authUser: response.data });
      toast.success("User created successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      set({ authUser: null });
    } finally {
      set({ isSignUp: false });
    }
  },

  login: async (user) => {
    set({ isLogin: true });
    try {
      const response = await axiosInstance.post("/auth/login", user);
      set({ authUser: response.data });
      toast.success("Login successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSignUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logout successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));

export default useAuthStore;
