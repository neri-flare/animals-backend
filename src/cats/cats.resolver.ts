import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OwnersService } from 'src/owners/owners.service';
import { Owner } from 'src/owners/models/owner.model';
import { CatsService } from './cats.service';
import { Cat, CatInput } from './models/cat.model';

@Resolver(() => Cat)
export class CatsResolver {
  constructor(
    private readonly catsService: CatsService,
    private readonly ownersService: OwnersService,
  ) {}

  @Query(() => Cat)
  async cat(@Args('name', { type: () => String }) name: string) {
    return this.catsService.getCat(name);
  }

  @Query(() => [Cat])
  async cats() {
    return this.catsService.getAllCats();
  }

  @ResolveField(() => Owner, { nullable: true })
  async owner(@Parent() cat: Cat) {
    const { ownerId } = cat;
    return this.ownersService.getOwnerById(ownerId);
  }

  @Mutation(() => Cat)
  async createCat(@Args('createCatInput') createCatInput: CatInput) {
    return this.catsService.createCat(createCatInput);
  }

  @Mutation(() => Owner)
  async increaseOwnerAge(
    @Args({ name: 'ownerId', type: () => String }) ownerId: string,
  ) {
    return this.ownersService.increaseAge(ownerId);
  }
}
