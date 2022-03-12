import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import {CreateTableDto, UpdateTableDto} from './dto/createTable.dto'
import {
  CreateTableDetailDto,
  UpdateTableDetailDto
} from './dto/createTableDetail.dto'
import {TableType, TableTypeDocument} from './schemas/tableType.schema'
import {
  TableStructure,
  TableStructureDocument
} from './schemas/tableStructure.schema'

@Injectable()
export class ConfigurationsRepository {
  constructor(
    @InjectModel(TableType.name)
    private tableTypeModel: Model<TableTypeDocument>,
    @InjectModel(TableStructure.name)
    private tableStructureModel: Model<TableStructureDocument>
  ) {}

  async getTables(): Promise<TableType[]> {
    return await this.tableTypeModel.find()
  }

  async getTableDetail(id: string): Promise<any> {
    const tableType = await this.tableTypeModel.findById(id)
    const tableStructure = await this.tableStructureModel
      .find({tableTypeId: id})
      .select({_id: 1, header: 1, dataType: 1, required: 1})

    let result = new Object()

    result['_id'] = tableType._id
    result['name'] = tableType.name
    result['columns'] = tableStructure

    console.log(result)

    return result
  }

  async saveTable(createTableDto: CreateTableDto): Promise<TableType> {
    return await new this.tableTypeModel(createTableDto).save()
  }

  async saveTableDetail(
    createTableDetail: CreateTableDetailDto
  ): Promise<TableStructure> {
    return await new this.tableStructureModel(createTableDetail).save()
  }

  async updateTable(
    id: string,
    updateTableDto: UpdateTableDto
  ): Promise<TableType> {
    return await this.tableTypeModel.findByIdAndUpdate(id, updateTableDto, {
      new: true
    })
  }

  async updateTableDetail(id: string, updateTableDetail: UpdateTableDetailDto) {
    return await this.tableStructureModel.findByIdAndUpdate(
      id,
      updateTableDetail,
      {
        new: true
      }
    )
  }

  async deleteTable(id: string): Promise<TableType> {
    return await this.tableTypeModel.findByIdAndDelete(id)
  }

  async deleteTableDetail(id: string): Promise<TableStructure> {
    return await this.tableStructureModel.findByIdAndDelete(id)
  }
}
