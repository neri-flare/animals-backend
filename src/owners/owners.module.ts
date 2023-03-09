import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnersDal } from './dal/owners.dal';
import { OwnersResolver } from './owners.resolver';
import { OwnersService } from './owners.service';
import { Owner, OwnerSchema } from './schemas/owner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }]),
  ],
  providers: [OwnersService, OwnersDal, OwnersResolver],
  exports: [OwnersService, OwnersDal],
})
export class OwnersModule {}
