import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsDal } from './dal/cats.dal';
import { CatsService } from './cats.service';
import { Cat, CatSchema } from './schemas/cat.schema';
import { CatsResolver } from './cats.resolver';
import { OwnersModule } from 'src/owners/owners.module';
import { CatsController } from './cats.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    OwnersModule,
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsDal, CatsResolver],
})
export class CatsModule {}
