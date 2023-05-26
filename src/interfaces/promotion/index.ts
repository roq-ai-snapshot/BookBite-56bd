import { UserPromotionInterface } from 'interfaces/user-promotion';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface PromotionInterface {
  id?: string;
  title: string;
  description?: string;
  start_date: Date;
  end_date: Date;
  restaurant_id: string;
  user_promotion?: UserPromotionInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    user_promotion?: number;
  };
}
