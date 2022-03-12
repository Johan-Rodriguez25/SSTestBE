import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export type TableTypeDocument = TableType & mongoose.Document

@Schema({timestamps: true})
export class TableType {
  @Prop({required: true})
  name: string;
}

export const TableTypeSchema = SchemaFactory.createForClass(TableType)
