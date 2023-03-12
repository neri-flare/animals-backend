import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class Dog {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field()
  breed: string;

  @Field()
  gender: string;

  @Field({ nullable: true })
  ownerId?: string;
}

@InputType()
export class DogInput {
  @Field()
  name: string;

  @Field()
  breed: string;

  @Field()
  gender: string;

  @Field({ nullable: true })
  ownerId?: string;
}
