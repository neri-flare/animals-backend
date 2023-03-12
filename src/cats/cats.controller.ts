import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Cat } from './cat.model';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get(':name')
  getCat(@Param('name') name: string): Promise<Cat> {
    return this.catsService.getCat(name);
  }

  @Get()
  getAllCats(): Promise<Cat[]> {
    return this.catsService.getAllCats();
  }

  @Post()
  createCat(@Body() createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.createCat(createCatDto);
  }

  @Put()
  updateCat(@Body() updateCatDto: UpdateCatDto) {
    return this.catsService.updateCat(updateCatDto);
  }

  @Delete(':id')
  deleteCat(@Param('id') id: string) {
    return this.catsService.deleteCat(id);
  }
}
