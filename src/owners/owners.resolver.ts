import {
  Args,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { OwnersService } from 'src/owners/owners.service';
import { Owner } from 'src/owners/models/owner.model';

@InputType()
export class OwnerInput {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field()
  catId?: string;

  @Field()
  gender: string;
}

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Query(() => Owner)
  async owner(@Args('id', { type: () => String }) id: string) {
    return this.ownersService.getOwner(id);
  }

  @Mutation(() => Owner)
  async createOwner(@Args('createOwnerData') createOwnerData: OwnerInput) {
    return this.ownersService.createOwner(createOwnerData);
  }
}
