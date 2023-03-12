import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OwnersService } from 'src/owners/owners.service';
import { Owner, OwnerInput } from 'src/owners/models/owner.model';

@Resolver(() => Owner)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Query(() => Owner)
  async owner(@Args('name', { type: () => String }) name: string) {
    return this.ownersService.getOwnerByName(name);
  }

  @Query(() => [Owner])
  async owners() {
    return this.ownersService.getAllOwners();
  }

  @Mutation(() => Owner)
  async createOwner(@Args('createOwnerData') createOwnerData: OwnerInput) {
    return this.ownersService.createOwner(createOwnerData);
  }
}
