import {Injectable} from '@nestjs/common'
import {DataRepository} from './data.repository'
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
export class DataService {
  constructor(private readonly dataRepository: DataRepository) {}

  async getTableData1(): Promise<TableData1[]> {
    return await this.dataRepository.getTableData1()
  }

  async saveTableData1(
    createTableData1: CreateTableData1Dto
  ): Promise<TableData1> {
    return await this.dataRepository.saveTableData1(createTableData1)
  }

  async updateTableData1(
    id: string,
    updateTableData1: UpdateTableData1Dto
  ): Promise<TableData1> {
    return await this.dataRepository.updateTableData1(id, updateTableData1)
  }

  async deleteTableData1(id: string): Promise<TableData1> {
    return await this.dataRepository.deleteTableData1(id)
  }

  async getTableData2(): Promise<TableData2[]> {
    return await this.dataRepository.getTableData2()
  }

  async saveTableData2(
    createTableData2: CreateTableData2Dto
  ): Promise<TableData2> {
    return await this.dataRepository.saveTableData2(createTableData2)
  }

  async updateTableData2(
    id: string,
    updateTableData2: UpdateTableData2Dto
  ): Promise<TableData2> {
    return await this.dataRepository.updateTableData2(id, updateTableData2)
  }

  async deleteTableData2(id: string): Promise<TableData2> {
    return await this.dataRepository.deleteTableData2(id)
  }

  async getTableData3(): Promise<TableData3[]> {
    return await this.dataRepository.getTableData3()
  }

  async saveTableData3(
    createTableData3: CreateTableData3Dto
  ): Promise<TableData3> {
    return await this.dataRepository.saveTableData3(createTableData3)
  }

  async updateTableData3(
    id: string,
    updateTableData3: UpdateTableData3Dto
  ): Promise<TableData3> {
    return await this.dataRepository.updateTableData3(id, updateTableData3)
  }

  async deleteTableData3(id: string): Promise<TableData3> {
    return await this.dataRepository.deleteTableData3(id)
  }
}
