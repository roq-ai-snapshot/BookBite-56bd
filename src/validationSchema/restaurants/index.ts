import * as yup from 'yup';
import { feedbackValidationSchema } from 'validationSchema/feedbacks';
import { menuItemValidationSchema } from 'validationSchema/menu-items';
import { orderValidationSchema } from 'validationSchema/orders';
import { promotionValidationSchema } from 'validationSchema/promotions';
import { reservationValidationSchema } from 'validationSchema/reservations';

export const restaurantValidationSchema = yup.object().shape({
  name: yup.string().required(),
  owner_id: yup.string().nullable().required(),
  feedback: yup.array().of(feedbackValidationSchema),
  menu_item: yup.array().of(menuItemValidationSchema),
  order: yup.array().of(orderValidationSchema),
  promotion: yup.array().of(promotionValidationSchema),
  reservation: yup.array().of(reservationValidationSchema),
});
