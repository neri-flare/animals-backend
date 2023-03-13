import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Gender } from 'src/app.types';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {
  @Prop({ required: true })
  name: string;

  @Prop()
  gender: Gender;

  @Prop()
  age: number;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
