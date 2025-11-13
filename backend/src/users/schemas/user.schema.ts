import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  password: string;

  // createdAt and updatedAt will be added automatically by timestamps: true
}

export const UserSchema = SchemaFactory.createForClass(User);

// Add a schema-level pre-save or index if you like.
// Ensure unique index is created
UserSchema.index({ email: 1 }, { unique: true });
