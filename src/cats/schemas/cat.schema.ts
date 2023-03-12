import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({ required: true })
  name: string;

  @Prop()
  gender: string;

  @Prop()
  color: string;

  @Prop()
  ownerId?: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
