import * as yup from 'yup';
import { userPromotionValidationSchema } from 'validationSchema/user-promotions';

export const promotionValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  restaurant_id: yup.string().nullable().required(),
  user_promotion: yup.array().of(userPromotionValidationSchema),
});
