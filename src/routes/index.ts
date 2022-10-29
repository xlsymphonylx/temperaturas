import { Request, Router } from "express";
import { Temp } from "../entity/Temp";
import tempService from "../services/tempService";
const router = Router();

router.post("/temp", (req: Request<Temp>, res, next) => {
  const { temp_corp, temp_amb } = req.params;
  const newTemp = tempService.create({
    temp_amb: temp_amb,
    temp_corp: temp_corp,
  });
  res.send(newTemp);
});

router.get("/temp", async (req: Request<Temp>, res, next) => {
  const temps = await tempService.getAll();
  res.send(temps);
});
export default router;
