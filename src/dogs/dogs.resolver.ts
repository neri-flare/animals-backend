import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DogsService } from './dogs.service';
import { Dog, DogInput } from './models/dog.model';

@Resolver(() => Dog)
export class DogsResolver {
  constructor(private readonly dogsService: DogsService) {}

  @Query(() => Dog)
  async dog(@Args('name', { type: () => String }) name: string) {
    return this.dogsService.getDog(name);
  }

  @Mutation(() => Dog)
  async createDog(@Args('createDogInput') createDogInput: DogInput) {
    return this.dogsService.createDog(createDogInput);
  }
}
