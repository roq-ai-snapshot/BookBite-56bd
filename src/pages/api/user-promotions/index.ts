import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { userPromotionValidationSchema } from 'validationSchema/user-promotions';
import { convertQueryToPrismaUtil } from '../../../server/utils';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getUserPromotions();
    case 'POST':
      return createUserPromotion();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getUserPromotions() {
    const data = await prisma.user_promotion.findMany(convertQueryToPrismaUtil(req.query, 'user_promotion'));
    return res.status(200).json(data);
  }

  async function createUserPromotion() {
    await userPromotionValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.user_promotion.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
