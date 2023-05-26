import { FeedbackInterface } from 'interfaces/feedback';
import { MenuItemInterface } from 'interfaces/menu-item';
import { OrderInterface } from 'interfaces/order';
import { PromotionInterface } from 'interfaces/promotion';
import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';

export interface RestaurantInterface {
  id?: string;
  name: string;
  owner_id: string;
  feedback?: FeedbackInterface[];
  menu_item?: MenuItemInterface[];
  order?: OrderInterface[];
  promotion?: PromotionInterface[];
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    feedback?: number;
    menu_item?: number;
    order?: number;
    promotion?: number;
    reservation?: number;
  };
}
