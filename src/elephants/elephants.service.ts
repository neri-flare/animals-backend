import { Injectable, NotFoundException } from '@nestjs/common';
import { ElephantsDal } from './dal/elephants.dal';
import { CreateElephantDto } from './dto/create-elephant.dto';
import { UpdateElephantDto } from './dto/update-elephant.dto';
import { Elephant } from './schemas/elephant.schema';

@Injectable()
export class ElephantsService {
  constructor(private readonly elephantsDal: ElephantsDal) {}

  async getElephant(name: string): Promise<Elephant> {
    const elephant = await this.elephantsDal.getElephant(name);
    if (!elephant) {
      throw new NotFoundException(`elephant with name "${name}" was not found`);
    }
    return elephant;
  }

  async getAllElephants(): Promise<Elephant[]> {
    return this.elephantsDal.getAllElephants();
  }

  async createElephant(
    createElephantDto: CreateElephantDto,
  ): Promise<Elephant> {
    return this.elephantsDal.createElephant(createElephantDto);
  }

  async updateElephant(updateElephantDto: UpdateElephantDto) {
    const elephantToUpdate =
      this.elephantsDal.updateElephant(updateElephantDto);
    if (!elephantToUpdate) {
      throw new NotFoundException(
        `elephant with ID "${updateElephantDto.id}" was not found`,
      );
    }
    return elephantToUpdate;
  }

  async deleteElephant(id: string): Promise<string> {
    const { deletedCount } = await this.elephantsDal.deleteElephant(id);
    if (!deletedCount) {
      throw new NotFoundException(`elephant with ID "${id}" was not found`);
    }
    return `deleted successfully ${deletedCount} elephants from the DB`;
  }
}
