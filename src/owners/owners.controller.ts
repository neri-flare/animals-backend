import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Owner } from './owner.model';
import { OwnersService } from './owners.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';

@Controller('owners')
export class OwnersController {
  constructor(private ownersService: OwnersService) {}

  @Get(':id')
  getOwner(@Param('id') id: string): Promise<Owner> {
    return this.ownersService.getOwnerById(id);
  }

  @Get()
  getAllOwners(): Promise<Owner[]> {
    return this.ownersService.getAllOwners();
  }

  @Post()
  createOwner(@Body() createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return this.ownersService.createOwner(createOwnerDto);
  }

  @Put()
  updateOwner(@Body() updateOwnerDto: UpdateOwnerDto) {
    return this.ownersService.updateOwner(updateOwnerDto);
  }

  @Delete(':id')
  deleteOwner(@Param('id') id: string) {
    return this.ownersService.deleteOwner(id);
  }
}
