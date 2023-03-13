import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Gender } from 'src/app.types';

@ObjectType()
export class Owner {
  @Field(() => String)
  id: string;

  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field()
  gender: Gender;
}

@InputType()
export class OwnerInput {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field()
  gender: Gender;
}
