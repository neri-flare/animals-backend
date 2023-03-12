import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCatDto } from '../dto/create-cat.dto';
import { UpdateCatDto } from '../dto/update-cat.dto';
import { Cat, CatDocument } from '../schemas/cat.schema';

@Injectable()
export class CatsDal {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async getCat(name: string): Promise<Cat> {
    return this.catModel.findOne({ name }).exec();
  }

  async getAllCats(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async createCat(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async updateCat(updateCatDto: UpdateCatDto) {
    const { id, color, name, ownerId } = updateCatDto;
    const catToUpdate = await this.catModel
      .findOneAndUpdate({ _id: id }, { color, name, ownerId }, { new: true })
      .exec();

    return catToUpdate;
  }

  async deleteCat(id: string) {
    return this.catModel.deleteOne({ _id: id });
  }
}
