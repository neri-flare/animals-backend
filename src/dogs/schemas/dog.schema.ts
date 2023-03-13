import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Gender } from 'src/app.types';

export type DogDocument = HydratedDocument<Dog>;

@Schema()
export class Dog {
  @Prop({ required: true })
  name: string;

  @Prop()
  gender: Gender;

  @Prop()
  breed: string;

  @Prop()
  ownerId?: string;
}

export const DogSchema = SchemaFactory.createForClass(Dog);
