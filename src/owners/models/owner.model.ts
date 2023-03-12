import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Owner {
  @Field(() => String)
  id: string;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field()
  gender: string;
}

@InputType()
export class OwnerInput {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field()
  gender: string;
}
