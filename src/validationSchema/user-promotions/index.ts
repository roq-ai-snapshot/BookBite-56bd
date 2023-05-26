import * as yup from 'yup';

export const userPromotionValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  promotion_id: yup.string().nullable().required(),
});
