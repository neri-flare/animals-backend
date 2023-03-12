import { Injectable, NotFoundException } from '@nestjs/common';
import { CatsDal } from './dal/cats.dal';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './schemas/cat.schema';

@Injectable()
export class CatsService {
  constructor(private readonly catsDal: CatsDal) {}

  async getCat(name: string): Promise<Cat> {
    const cat = await this.catsDal.getCat(name);
    if (!cat) {
      throw new NotFoundException(`cat with name "${name}" was not found`);
    }
    return cat;
  }

  async getAllCats(): Promise<Cat[]> {
    return this.catsDal.getAllCats();
  }

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsDal.createCat(createCatDto);
  }

  async updateCat(updateCatDto: UpdateCatDto) {
    const catToUpdate = this.catsDal.updateCat(updateCatDto);
    if (!catToUpdate) {
      throw new NotFoundException(
        `cat with ID "${updateCatDto.id}" was not found`,
      );
    }
    return catToUpdate;
  }

  async deleteCat(id: string): Promise<string> {
    const { deletedCount } = await this.catsDal.deleteCat(id);
    if (!deletedCount) {
      throw new NotFoundException(`cat with ID "${id}" was not found`);
    }
    return `deleted successfully ${deletedCount} cats from the DB`;
  }
}
