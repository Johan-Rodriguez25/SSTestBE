import {Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common'
import {ConfigurationsService} from './configurations.service'
import {CreateTableDto, UpdateTableDto} from './dto/createTable.dto'
import {
  CreateTableDetailDto,
  UpdateTableDetailDto
} from './dto/createTableDetail.dto'
import {TableType} from './schemas/tableType.schema'
import {TableStructure} from './schemas/tableStructure.schema'

@Controller('configurations')
export class ConfigurationsController {
  constructor(private configurationsService: ConfigurationsService) {}

  @Get()
  async getTables(): Promise<TableType[]> {
    return await this.configurationsService.getTables()
  }

  @Get(':id')
  async getTableDetail(@Param('id') id: string): Promise<any> {
    return await this.configurationsService.getTableDetail(id)
  }

  @Post('createTable')
  async saveTable(@Body() createTableDto: CreateTableDto): Promise<TableType> {
    return this.configurationsService.saveTable(createTableDto)
  }

  @Post('createTableDetail')
  async saveTableDetail(
    @Body() createTableDetail: CreateTableDetailDto
  ): Promise<TableStructure> {
    return this.configurationsService.saveTableDetail(createTableDetail)
  }

  @Put('updateTable/:id')
  async updateTable(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto
  ): Promise<TableType> {
    return this.configurationsService.updateTable(id, updateTableDto)
  }

  @Put('updateTableDetail/:id')
  async updateTableDetail(
    @Param('id') id: string,
    @Body() updateTableDetail: UpdateTableDetailDto
  ): Promise<TableStructure> {
    return this.configurationsService.updateTableDetail(id, updateTableDetail)
  }

  @Delete('deleteTable/:id')
  async deleteTable(@Param('id') id: string): Promise<TableType> {
    return this.configurationsService.deleteTable(id)
  }

  @Delete('deleteTableDetail/:id')
  async deleteTableDetail(@Param('id') id: string): Promise<TableStructure> {
    return this.configurationsService.deleteTableDetail(id)
  }
}
