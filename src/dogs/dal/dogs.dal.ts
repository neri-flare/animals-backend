import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDogDto } from '../dto/create-dog.dto';
import { UpdateDogDto } from '../dto/update-dog.dto';
import { Dog, DogDocument } from '../schemas/dog.schema';

@Injectable()
export class DogsDal {
  constructor(@InjectModel(Dog.name) private dogModel: Model<DogDocument>) {}

  async getDog(id: string): Promise<Dog> {
    return this.dogModel.findById(id).exec();
  }

  async getAllDogs(): Promise<Dog[]> {
    return this.dogModel.find().exec();
  }

  async createDog(createDogDto: CreateDogDto): Promise<Dog> {
    const createdDog = new this.dogModel(createDogDto);
    return createdDog.save();
  }

  async updateDog(updateDogDto: UpdateDogDto) {
    const { id, breed, gender, name } = updateDogDto;
    const dogToUpdate = await this.dogModel
      .findOneAndUpdate({ _id: id }, { breed, gender, name }, { new: true })
      .exec();

    return dogToUpdate;
  }

  async deleteDog(id: string) {
    return this.dogModel.deleteOne({ _id: id });
  }
}
