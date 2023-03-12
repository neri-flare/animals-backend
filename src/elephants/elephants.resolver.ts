import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ElephantsService } from './elephants.service';
import { Elephant, ElephantInput } from './models/elephant.model';
import { Owner } from 'src/owners/models/owner.model';
import { OwnersService } from 'src/owners/owners.service';

@Resolver(() => Elephant)
export class ElephantsResolver {
  constructor(
    private readonly elephantsService: ElephantsService,
    private readonly ownersService: OwnersService,
  ) {}

  @Query(() => Elephant)
  async elephant(@Args('name', { type: () => String }) name: string) {
    return this.elephantsService.getElephant(name);
  }

  @Query(() => [Elephant])
  async elephants() {
    return this.elephantsService.getAllElephants();
  }

  @ResolveField(() => Owner, { nullable: true })
  async owner(@Parent() elephant: Elephant) {
    const { ownerId } = elephant;
    return this.ownersService.getOwnerById(ownerId);
  }

  @Mutation(() => Elephant)
  async createElephant(
    @Args('createElephantInput') createElephantInput: ElephantInput,
  ) {
    return this.elephantsService.createElephant(createElephantInput);
  }
}
