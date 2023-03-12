import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ElephantsService } from './elephants.service';
import { Elephant, ElephantInput } from './models/elephant.model';

@Resolver(() => Elephant)
export class ElephantsResolver {
  constructor(private readonly elephantsService: ElephantsService) {}

  @Query(() => Elephant)
  async elephant(@Args('name', { type: () => String }) name: string) {
    return this.elephantsService.getElephant(name);
  }

  @Mutation(() => Elephant)
  async createElephant(
    @Args('createElephantInput') createElephantInput: ElephantInput,
  ) {
    return this.elephantsService.createElephant(createElephantInput);
  }
}
