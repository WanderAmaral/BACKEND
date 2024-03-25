import { prisma } from "../services/prisma";

export const createUser = async (data) => {
  const user = prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updateAt: true,
    },
  });
  return user;
};

export const getAll = async () => {
  const getUser = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      password: false,
      phone: true,
      createdAt: true,
      updateAt: true,
    },
  });
  return getUser;
};

export const userById = async (id) => {
  const idUser = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return idUser;
};