import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ElephantsDal } from './dal/elephants.dal';
import { ElephantsController } from './elephants.controller';
import { ElephantsResolver } from './elephants.resolver';
import { ElephantsService } from './elephants.service';
import { Elephant, ElephantSchema } from './schemas/elephant.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Elephant.name, schema: ElephantSchema },
    ]),
  ],
  controllers: [ElephantsController],
  providers: [ElephantsService, ElephantsDal, ElephantsResolver],
})
export class ElephantsModule {}
