import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Gender } from 'src/app.types';

@ObjectType()
export class Dog {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field()
  breed: string;

  @Field()
  gender: Gender;

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
  gender: Gender;

  @Field({ nullable: true })
  ownerId?: string;
}
