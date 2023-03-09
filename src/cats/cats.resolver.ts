import {
  Args,
  Field,
  InputType,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OwnersService } from 'src/owners/owners.service';
import { Owner } from 'src/owners/models/owner.model';
import { CatsService } from './cats.service';
import { Cat } from './models/cat.model';

@InputType()
export class CatInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  color: string;

  @Field({ nullable: true })
  gender: string;

  @Field()
  ownerId?: string;
}

@Resolver(() => Cat)
export class CatsResolver {
  constructor(
    private readonly catsService: CatsService,
    private readonly ownersService: OwnersService,
  ) {}

  @Query(() => Cat)
  async cat(@Args('id', { type: () => String }) id: string) {
    return this.catsService.getCat(id);
  }

  @ResolveField(() => Owner)
  async owner(@Parent() cat: Cat) {
    const { id: catId } = cat;
    return this.ownersService.getAllOwnersByCatId(catId);
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
