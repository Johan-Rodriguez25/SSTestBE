import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import * as mongoose from 'mongoose'

export type TableData2Document = TableData2 & mongoose.Document

@Schema({timestamps: true})
export class TableData2 {
  @Prop({required: true})
  t2c1: number

  @Prop()
  t2c2: string

  @Prop()
  t2c3: number

  @Prop({required: true})
  t2c4: Date

  @Prop({required: true})
  t2c5: number
}

export const TableData2Schema = SchemaFactory.createForClass(TableData2)
