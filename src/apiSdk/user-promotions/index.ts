import axios from 'axios';
import queryString from 'query-string';
import { UserPromotionInterface } from 'interfaces/user-promotion';
import { GetQueryInterface } from '../../interfaces';

export const getUserPromotions = async (query?: GetQueryInterface) => {
  const response = await axios.get(`/api/user-promotions${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createUserPromotion = async (userPromotion: UserPromotionInterface) => {
  const response = await axios.post('/api/user-promotions', userPromotion);
  return response.data;
};

export const updateUserPromotionById = async (id: string, userPromotion: UserPromotionInterface) => {
  const response = await axios.put(`/api/user-promotions/${id}`, userPromotion);
  return response.data;
};

export const getUserPromotionById = async (id: string) => {
  const response = await axios.get(`/api/user-promotions/${id}`);
  return response.data;
};
