import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Dog } from './dog.model';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get(':id')
  getDog(@Param('name') name: string): Promise<Dog> {
    return this.dogsService.getDog(name);
  }

  @Get()
  getAllDogs(): Promise<Dog[]> {
    return this.dogsService.getAllDogs();
  }

  @Post()
  createDog(@Body() createDogDto: CreateDogDto): Promise<Dog> {
    return this.dogsService.createDog(createDogDto);
  }

  @Put()
  updateDog(@Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.updateDog(updateDogDto);
  }

  @Delete(':id')
  deleteDog(@Param('id') id: string) {
    return this.dogsService.deleteDog(id);
  }
}
