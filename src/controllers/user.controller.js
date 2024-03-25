import bcrypt from "bcrypt";
import {
  createUser,
  getAll,
  userById,
  updateUser,
  userDelete,
} from "../repositorys/user.repository";
import { userValidation } from "../validations/user.validation";

export const create = async (req, res) => {
  try {
    await userValidation.validate(req.body);

    const hashPassowrd = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassowrd;
    const user = await createUser(req.body);
    res.status(200).send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

export const get = async (req, res) => {
  try {
    const fetchUser = await getAll();
    res.status(200).send(fetchUser);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getId = async (req, res) => {
  try {
    const user = await userById(Number(req.params.id));
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const updateId = async (req, res) => {
  try {
    const userUpdate = await updateUser(Number(req.params.id), req.body);
    res.status(200).send(userUpdate);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const remove = async (req, res) => {
  try {
    await userDelete(Number(req.params.id));
    res.status(200).send();
  } catch (error) {
    res.status(400).send(error);
  }
}; 
