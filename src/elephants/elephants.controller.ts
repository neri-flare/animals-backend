import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ElephantsService } from './elephants.service';
import { CreateElephantDto } from './dto/create-elephant.dto';
import { UpdateElephantDto } from './dto/update-elephant.dto';
import { Elephant } from './elephant.model';

@Controller('elephants')
export class ElephantsController {
  constructor(private elephantsService: ElephantsService) {}

  @Get(':name')
  getElephant(@Param('name') name: string): Promise<Elephant> {
    return this.elephantsService.getElephant(name);
  }

  @Get()
  getAllElephants(): Promise<Elephant[]> {
    return this.elephantsService.getAllElephants();
  }

  @Post()
  createElephant(
    @Body() createElephantDto: CreateElephantDto,
  ): Promise<Elephant> {
    return this.elephantsService.createElephant(createElephantDto);
  }

  @Put()
  updateElephant(@Body() updateElephantDto: UpdateElephantDto) {
    return this.elephantsService.updateElephant(updateElephantDto);
  }

  @Delete(':id')
  deleteElephant(@Param('id') id: string) {
    return this.elephantsService.deleteElephant(id);
  }
}
