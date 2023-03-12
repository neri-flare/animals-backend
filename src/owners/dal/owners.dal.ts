import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOwnerDto } from '../dto/create-owner.dto';
import { UpdateOwnerDto } from '../dto/update-owner.dto';
import { Owner, OwnerDocument } from '../schemas/owner.schema';

@Injectable()
export class OwnersDal {
  constructor(
    @InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>,
  ) {}

  async getOwnerById(id: string): Promise<Owner> {
    return this.ownerModel.findById(id).exec();
  }

  async getOwnerByName(name: string): Promise<Owner> {
    return this.ownerModel.findOne({ name }).exec();
  }

  async getAllOwners(): Promise<Owner[]> {
    return this.ownerModel.find().exec();
  }

  async createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    const createdOwner = new this.ownerModel(createOwnerDto);
    return createdOwner.save();
  }

  async updateOwner(updateOwnerDto: UpdateOwnerDto) {
    const { id, name, gender, age } = updateOwnerDto;
    const ownerToUpdate = await this.ownerModel
      .findOneAndUpdate({ _id: id }, { age, gender, name }, { new: true })
      .exec();

    return ownerToUpdate;
  }

  async deleteOwner(id: string) {
    return this.ownerModel.deleteOne({ _id: id });
  }

  async increaseAge(id: string) {
    const owner = await this.getOwnerById(id);
    return this.ownerModel.findOneAndUpdate(
      { _id: id },
      { age: owner.age + 1 },
      { new: true },
    );
  }
}
