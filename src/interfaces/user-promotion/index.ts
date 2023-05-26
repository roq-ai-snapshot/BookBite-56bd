import { UserInterface } from 'interfaces/user';
import { PromotionInterface } from 'interfaces/promotion';

export interface UserPromotionInterface {
  id?: string;
  user_id: string;
  promotion_id: string;

  user?: UserInterface;
  promotion?: PromotionInterface;
  _count?: {};
}
