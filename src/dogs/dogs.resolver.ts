import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Owner } from 'src/owners/models/owner.model';
import { OwnersService } from 'src/owners/owners.service';
import { DogsService } from './dogs.service';
import { Dog, DogInput } from './models/dog.model';

@Resolver(() => Dog)
export class DogsResolver {
  constructor(
    private readonly dogsService: DogsService,
    private readonly ownersService: OwnersService,
  ) {}

  @Query(() => Dog)
  async dog(@Args('name', { type: () => String }) name: string) {
    return this.dogsService.getDog(name);
  }

  @Query(() => [Dog])
  async dogs() {
    return this.dogsService.getAllDogs();
  }

  @ResolveField(() => Owner, { nullable: true })
  async owner(@Parent() dog: Dog) {
    const { ownerId } = dog;
    return this.ownersService.getOwnerById(ownerId);
  }

  @Mutation(() => Dog)
  async createDog(@Args('createDogInput') createDogInput: DogInput) {
    return this.dogsService.createDog(createDogInput);
  }
}
