import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';

export interface ReservationInterface {
  id?: string;
  date_time: Date;
  customer_id: string;
  restaurant_id: string;
  table_number: number;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}
