import api from './api';
import * as SecureStore from 'expo-secure-store';

export const authService = {
  /**
   * Register a new user
   */
  async register(data) {
    const response = await api.post('/auth/register', data);
    if (response.success && response.data?.token) {
      await SecureStore.setItemAsync('authToken', response.data.token);
      await SecureStore.setItemAsync('user', JSON.stringify(response.data.user));
    }
    return response;
  },

  /**
   * Login user
   */
  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    if (response.success && response.data?.token) {
      await SecureStore.setItemAsync('authToken', response.data.token);
      await SecureStore.setItemAsync('user', JSON.stringify(response.data.user));
    }
    return response;
  },

  /**
   * Get current user
   */
  async getCurrentUser() {
    const response = await api.get('/auth/me');
    if (response.success && response.data) {
      await SecureStore.setItemAsync('user', JSON.stringify(response.data));
    }
    return response;
  },

  /**
   * Logout user
   */
  async logout() {
    await SecureStore.deleteItemAsync('authToken');
    await SecureStore.deleteItemAsync('user');
  },

  /**
   * Check if user is authenticated
   */
  async isAuthenticated() {
    const token = await SecureStore.getItemAsync('authToken');
    return !!token;
  },

  /**
   * Get stored user
   */
  async getStoredUser() {
    const userString = await SecureStore.getItemAsync('user');
    return userString ? JSON.parse(userString) : null;
  },
};
