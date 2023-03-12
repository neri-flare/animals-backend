import { Field, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class Cat {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  color: string;

  @Field()
  ownerId?: string;
}

@InputType()
export class CatInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  color: string;

  @Field()
  ownerId?: string;
}
