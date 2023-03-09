import { Field, ObjectType } from '@nestjs/graphql';
import { Owner } from 'src/owners/models/owner.model';

@ObjectType()
export class Cat {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field({ nullable: true })
  color: string;

  @Field()
  ownerId?: string;
}
