import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Temp } from "../entity/Temp";
import TempInterface from "../interfaces/Temp";

class TempService {
  tempRepository: Repository<Temp>;

  constructor() {
    this.tempRepository = AppDataSource.getRepository(Temp);
  }
  async create(createTempDto: TempInterface) {
    const newTemp = this.tempRepository.create({
      temp_corp: createTempDto.temp_corp,
      temp_amb: createTempDto.temp_amb,
    });
    return await this.tempRepository.save(newTemp);
  }
  async getAll() {
    const temps = await this.tempRepository.find();
    return temps;
  }
  async findTemp(id: any) {
    const temps = await this.tempRepository.findOneBy(id);
    return temps;
  }

  async deleteTemp(tempId: number) {
    const deletedTemp = await this.tempRepository.delete(tempId);
    return deletedTemp;
  }
}

export default new TempService();
