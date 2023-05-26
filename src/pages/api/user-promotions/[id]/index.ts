import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { userPromotionValidationSchema } from 'validationSchema/user-promotions';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getUserPromotionById();
    case 'PUT':
      return updateUserPromotionById();
    case 'DELETE':
      return deleteUserPromotionById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getUserPromotionById() {
    const data = await prisma.user_promotion.findFirst({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }

  async function updateUserPromotionById() {
    await userPromotionValidationSchema.validate(req.body);
    const data = await prisma.user_promotion.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    return res.status(200).json(data);
  }
  async function deleteUserPromotionById() {
    const data = await prisma.user_promotion.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
