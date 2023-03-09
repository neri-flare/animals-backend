import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {
  @Prop({ required: true })
  name: string;

  @Prop()
  gender: string;

  @Prop()
  age: number;

  @Prop()
  catId: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
