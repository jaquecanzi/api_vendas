import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "oioioi" });
});

export default routes;
