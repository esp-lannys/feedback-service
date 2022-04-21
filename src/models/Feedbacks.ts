import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

export type FeedbackDocument = Feedback & Document;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Feedback {
  @Prop({
    type: String,
  })
  title: string;

  @Prop({
    type: String,
    allowNull: false,
  })
  description: string;

  @Prop({
    type: SchemaTypes.Array,
    allowNull: false,
  })
  images: string[];

  @Prop({
    type: Boolean,
    defaultValue: false,
  })
  is_deleted: boolean;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
