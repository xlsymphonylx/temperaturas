import { Router } from "express";
import tempService from "../services/tempService";
const router = Router();

router.post("/temp", (req, res, next) => {
  const { temp_corp, temp_amb } = req.body;
  const newTemp = tempService.create({
    temp_amb: temp_amb,
    temp_corp: temp_corp,
  });
  res.send(newTemp);
});
export default router;
