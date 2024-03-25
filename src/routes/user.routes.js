import { create, get, getId, updateId, remove } from "../controllers/user.controller";

const userRoutes = (app) => {
  app.post("/user", create);
  app.get("/user", get);
  app.get("/user/:id", getId);
  app.put("/user/:id", updateId);
  app.delete("/user/:id", remove)
};

export default userRoutes;
