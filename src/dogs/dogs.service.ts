import { Injectable, NotFoundException } from '@nestjs/common';
import { DogsDal } from './dal/dogs.dal';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './schemas/dog.schema';

@Injectable()
export class DogsService {
  constructor(private readonly dogsDal: DogsDal) {}

  async getDog(name: string): Promise<Dog> {
    const dog = await this.dogsDal.getDog(name);
    if (!dog) {
      throw new NotFoundException(`dog with name "${name}" was not found`);
    }
    return dog;
  }

  async getAllDogs(): Promise<Dog[]> {
    return this.dogsDal.getAllDogs();
  }

  async createDog(createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogsDal.createDog(createDogDto);
  }

  async updateDog(updateDogDto: UpdateDogDto) {
    const dogToUpdate = this.dogsDal.updateDog(updateDogDto);
    if (!dogToUpdate) {
      throw new NotFoundException(
        `dog with ID "${updateDogDto.id}" was not found`,
      );
    }
    return dogToUpdate;
  }

  async deleteDog(id: string): Promise<string> {
    const { deletedCount } = await this.dogsDal.deleteDog(id);
    if (!deletedCount) {
      throw new NotFoundException(`dog with ID "${id}" was not found`);
    }
    return `deleted successfully ${deletedCount} dogs from the DB`;
  }
}
