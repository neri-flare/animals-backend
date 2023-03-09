import { Field, ObjectType, InputType } from '@nestjs/graphql';

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

@InputType()
export class CatInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  color: string;

  @Field()
  ownerId?: string;
}
