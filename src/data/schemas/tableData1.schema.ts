import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export type TableData1Document = TableData1 & mongoose.Document

@Schema({timestamps: true})
export class TableData1 {
  @Prop({required: true})
  t1c1: number

  @Prop({required: true})
  t1c2: string

  @Prop()
  t1c3: number

  @Prop()
  t1c4: Date
}

export const TableData1Schema = SchemaFactory.createForClass(TableData1)
