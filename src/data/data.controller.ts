import {Controller, Get, Post, Put, Delete, Param, Body} from '@nestjs/common'
import {DataService} from './data.service'
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

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get('tableData1')
  async getTableData1(): Promise<TableData1[]> {
    return await this.dataService.getTableData1()
  }

  @Post('tableData1')
  async saveTableData1(
    @Body() createTableData1: CreateTableData1Dto
  ): Promise<TableData1> {
    return await this.dataService.saveTableData1(createTableData1)
  }

  @Put('tableData1/:id')
  async updateTableData1(
    @Param('id') id: string,
    @Body() updateTableData1: UpdateTableData1Dto
  ): Promise<TableData1> {
    return await this.dataService.updateTableData1(id, updateTableData1)
  }

  @Delete('tableData1/:id')
  async deleteTableData1(@Param('id') id: string): Promise<TableData1> {
    return await this.dataService.deleteTableData1(id)
  }

  @Get('tableData2')
  async getTableData2(): Promise<TableData2[]> {
    return await this.dataService.getTableData2()
  }

  @Post('tableData2')
  async saveTableData2(
    @Body() createTableData2: CreateTableData2Dto
  ): Promise<TableData2> {
    return await this.dataService.saveTableData2(createTableData2)
  }

  @Put('tableData2/:id')
  async updateTableData2(
    @Param('id') id: string,
    @Body() updateTableData2: UpdateTableData2Dto
  ): Promise<TableData2> {
    return await this.dataService.updateTableData2(id, updateTableData2)
  }

  @Delete('tableData2/:id')
  async deleteTableData2(@Param('id') id: string): Promise<TableData2> {
    return await this.dataService.deleteTableData2(id)
  }

  @Get('tableData3')
  async getTableData3(): Promise<TableData3[]> {
    return await this.dataService.getTableData3()
  }

  @Post('tableData3')
  async saveTableData3(
    @Body() createTableData3: CreateTableData3Dto
  ): Promise<TableData3> {
    return await this.dataService.saveTableData3(createTableData3)
  }

  @Put('tableData3/:id')
  async updateTableData3(
    @Param('id') id: string,
    @Body() updateTableData3: UpdateTableData3Dto
  ): Promise<TableData3> {
    return await this.dataService.updateTableData3(id, updateTableData3)
  }

  @Delete('tableData3/:id')
  async deleteTableData3(@Param('id') id: string): Promise<TableData3> {
    return await this.dataService.deleteTableData3(id)
  }
}
