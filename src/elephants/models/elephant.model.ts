import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class Elephant {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field()
  trunkLength: number;

  @Field()
  gender: string;
}

@InputType()
export class ElephantInput {
  @Field()
  name: string;

  @Field()
  trunkLength: number;

  @Field()
  gender: string;
}
