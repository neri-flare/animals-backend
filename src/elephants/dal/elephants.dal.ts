import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateElephantDto } from '../dto/create-elephant.dto';
import { UpdateElephantDto } from '../dto/update-elephant.dto';
import { Elephant, ElephantDocument } from '../schemas/elephant.schema';

@Injectable()
export class ElephantsDal {
  constructor(
    @InjectModel(Elephant.name) private elephantModel: Model<ElephantDocument>,
  ) {}

  async getElephant(id: string): Promise<Elephant> {
    return this.elephantModel.findById(id).exec();
  }

  async getAllElephants(): Promise<Elephant[]> {
    return this.elephantModel.find().exec();
  }

  async createElephant(
    createElephantDto: CreateElephantDto,
  ): Promise<Elephant> {
    const createdElephant = new this.elephantModel(createElephantDto);
    return createdElephant.save();
  }

  async updateElephant(updateElephantDto: UpdateElephantDto) {
    const { id, trunkLength, gender, name } = updateElephantDto;
    const elephantToUpdate = await this.elephantModel
      .findOneAndUpdate(
        { _id: id },
        { trunkLength, gender, name },
        { new: true },
      )
      .exec();

    return elephantToUpdate;
  }

  async deleteElephant(id: string) {
    return this.elephantModel.deleteOne({ _id: id });
  }
}
