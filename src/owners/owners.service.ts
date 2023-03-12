import { Injectable, NotFoundException } from '@nestjs/common';
import { OwnersDal } from './dal/owners.dal';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './schemas/owner.schema';

@Injectable()
export class OwnersService {
  constructor(private readonly ownersDal: OwnersDal) {}

  async getOwner(id: string): Promise<Owner> {
    const owner = await this.ownersDal.getOwner(id);
    // if (!owner) {
    //   throw new NotFoundException(`owner with ID "${id}" was not found`);
    // }
    return owner;
  }

  async getAllOwners(): Promise<Owner[]> {
    return this.ownersDal.getAllOwners();
  }

  async createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return this.ownersDal.createOwner(createOwnerDto);
  }

  async updateOwner(updateOwnerDto: UpdateOwnerDto) {
    const ownerToUpdate = this.ownersDal.updateOwner(updateOwnerDto);
    if (!ownerToUpdate) {
      throw new NotFoundException(
        `owner with ID "${updateOwnerDto.id}" was not found`,
      );
    }
    return ownerToUpdate;
  }

  async deleteOwner(id: string): Promise<string> {
    const { deletedCount } = await this.ownersDal.deleteOwner(id);
    if (!deletedCount) {
      throw new NotFoundException(`owner with ID "${id}" was not found`);
    }
    return `deleted successfully ${deletedCount} owners from the DB`;
  }

  async increaseAge(id: string): Promise<Owner> {
    return this.ownersDal.increaseAge(id);
  }
}
