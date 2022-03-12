import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export type TableData3Document = TableData3 & mongoose.Document

@Schema({timestamps: true})
export class TableData3 {
  @Prop({required: true})
  t3c1: number

  @Prop({required: true})
  t3c2: string

  @Prop()
  t3c3: Date
}

export const TableData3Schema = SchemaFactory.createForClass(TableData3)
