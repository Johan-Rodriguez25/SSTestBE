import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import {TableType} from './tableType.schema'

export type TableStructureDocument = TableStructure & mongoose.Document

@Schema({timestamps: true})
export class TableStructure {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TableType'
  })
  tableTypeId: TableType

  @Prop({required: true})
  header: string

  @Prop({required: true, enum: ['date', 'int', 'string']})
  dataType: string

  @Prop()
  format: string

  @Prop({required: true})
  required: boolean
}

export const TableStructureSchema = SchemaFactory.createForClass(TableStructure)
