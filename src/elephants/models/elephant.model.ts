import { Field, ObjectType, InputType } from '@nestjs/graphql';
import { Gender } from 'src/app.types';

@ObjectType()
export class Elephant {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field()
  trunkLength: number;

  @Field()
  gender: Gender;

  @Field({ nullable: true })
  ownerId?: string;
}

@InputType()
export class ElephantInput {
  @Field()
  name: string;

  @Field()
  trunkLength: number;

  @Field()
  gender: Gender;

  @Field({ nullable: true })
  ownerId?: string;
}
