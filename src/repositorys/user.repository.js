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

export const updateUser = async (id, data) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      email: data.email,
      password: data.password
    },
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

export const userDelete = async (id) => {
  await prisma.user.delete({
    where: {
      id,
    },
  });
  return
};
