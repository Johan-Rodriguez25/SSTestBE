import {Injectable} from '@nestjs/common'
import {ConfigurationsRepository} from './configurations.repository'
import {CreateTableDto, UpdateTableDto} from './dto/createTable.dto'
import {
  CreateTableDetailDto,
  UpdateTableDetailDto
} from './dto/createTableDetail.dto'
import {TableStructure} from './schemas/tableStructure.schema'
import {TableType} from './schemas/tableType.schema'

@Injectable()
export class ConfigurationsService {
  constructor(
    private readonly configurationsRepository: ConfigurationsRepository
  ) {}

  async getTables(): Promise<TableType[]> {
    return await this.configurationsRepository.getTables()
  }

  async getTableDetail(id: string): Promise<any> {
    return await this.configurationsRepository.getTableDetail(id)
  }

  async saveTable(createTableDto: CreateTableDto): Promise<TableType> {
    return await this.configurationsRepository.saveTable(createTableDto)
  }

  async saveTableDetail(
    createTableDetail: CreateTableDetailDto
  ): Promise<TableStructure> {
    return await this.configurationsRepository.saveTableDetail(
      createTableDetail
    )
  }

  async updateTable(
    id: string,
    updateTableDto: UpdateTableDto
  ): Promise<TableType> {
    return await this.configurationsRepository.updateTable(id, updateTableDto)
  }

  async updateTableDetail(
    id: string,
    updateTableDetail: UpdateTableDetailDto
  ): Promise<TableStructure> {
    return await this.configurationsRepository.updateTableDetail(
      id,
      updateTableDetail
    )
  }

  async deleteTable(id: string): Promise<TableType> {
    return await this.configurationsRepository.deleteTable(id)
  }

  async deleteTableDetail(id: string): Promise<TableStructure> {
    return await this.configurationsRepository.deleteTableDetail(id)
  }
}
