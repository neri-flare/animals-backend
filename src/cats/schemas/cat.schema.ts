import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Gender } from 'src/app.types';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop()
  gender: Gender;

  @Prop()
  color: string;

  @Prop()
  ownerId?: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
