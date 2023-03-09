import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class Dog {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field({ nullable: true })
  breed: string;

  @Field()
  gender: string;
}

@InputType()
export class DogInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  breed: string;

  @Field()
  gender: string;
}
