import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ElephantDocument = HydratedDocument<Elephant>;

@Schema()
export class Elephant {
  @Prop({ required: true })
  name: string;

  @Prop()
  gender: string;

  @Prop()
  trunkLength: number;

  @Prop()
  ownerId?: string;
}

export const ElephantSchema = SchemaFactory.createForClass(Elephant);
