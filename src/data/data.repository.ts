import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {
  CreateTableData1Dto,
  UpdateTableData1Dto
} from './dto/createTableData1.dto'
import {
  CreateTableData2Dto,
  UpdateTableData2Dto
} from './dto/createTableData2.dto'
import {
  CreateTableData3Dto,
  UpdateTableData3Dto
} from './dto/createTableData3.dto'
import {TableData1} from './schemas/tableData1.schema'
import {TableData2} from './schemas/tableData2.schema'
import {TableData3} from './schemas/tableData3.schema'

@Injectable()
export class DataRepository {
  constructor(
    @InjectModel(TableData1.name)
    private tableData1Model: Model<TableData1>,
    @InjectModel(TableData2.name)
    private tableData2Model: Model<TableData2>,
    @InjectModel(TableData3.name)
    private tableData3Model: Model<TableData3>
  ) {}

  async getTableData1(): Promise<TableData1[]> {
    return await this.tableData1Model.find()
  }

  async saveTableData1(
    createTableData1: CreateTableData1Dto
  ): Promise<TableData1> {
    return await this.tableData1Model.create(createTableData1)
  }

  async updateTableData1(
    id: string,
    updateTableData1: UpdateTableData1Dto
  ): Promise<TableData1> {
    return await this.tableData1Model.findByIdAndUpdate(id, updateTableData1, {
      new: true
    })
  }

  async deleteTableData1(id: string): Promise<TableData1> {
    return await this.tableData1Model.findByIdAndDelete(id)
  }

  async getTableData2(): Promise<TableData2[]> {
    return await this.tableData2Model.find()
  }

  async saveTableData2(
    createTableData2: CreateTableData2Dto
  ): Promise<TableData2> {
    return await this.tableData2Model.create(createTableData2)
  }

  async updateTableData2(
    id: string,
    updateTableData2: UpdateTableData2Dto
  ): Promise<TableData2> {
    return await this.tableData2Model.findByIdAndUpdate(id, updateTableData2, {
      new: true
    })
  }

  async deleteTableData2(id: string): Promise<TableData2> {
    return await this.tableData2Model.findByIdAndDelete(id)
  }

  async getTableData3(): Promise<TableData3[]> {
    return await this.tableData3Model.find()
  }

  async saveTableData3(
    createTableData3: CreateTableData3Dto
  ): Promise<TableData3> {
    return await this.tableData3Model.create(createTableData3)
  }

  async updateTableData3(
    id: string,
    updateTableData3: UpdateTableData3Dto
  ): Promise<TableData3> {
    return await this.tableData3Model.findByIdAndUpdate(id, updateTableData3, {
      new: true
    })
  }

  async deleteTableData3(id: string): Promise<TableData3> {
    return await this.tableData3Model.findByIdAndDelete(id)
  }
}
