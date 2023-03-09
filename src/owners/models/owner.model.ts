import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Owner {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field()
  catId?: string;

  @Field()
  gender: string;
}
