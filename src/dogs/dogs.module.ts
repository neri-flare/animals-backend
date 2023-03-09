import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DogsDal } from './dal/dogs.dal';
import { DogsController } from './dogs.controller';
import { DogsResolver } from './dogs.resolver';
import { DogsService } from './dogs.service';
import { Dog, DogSchema } from './schemas/dog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Dog.name, schema: DogSchema }])],
  controllers: [DogsController],
  providers: [DogsService, DogsDal, DogsResolver],
})
export class DogsModule {}
