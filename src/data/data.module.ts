import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {DataService} from './data.service'
import {DataController} from './data.controller'
import {DataRepository} from './data.repository'
import {TableData1, TableData1Schema} from './schemas/tableData1.schema'
import {TableData2, TableData2Schema} from './schemas/tableData2.schema'
import {TableData3, TableData3Schema} from './schemas/tableData3.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: TableData1.name, schema: TableData1Schema},
      {name: TableData2.name, schema: TableData2Schema},
      {name: TableData3.name, schema: TableData3Schema}
    ])
  ],
  providers: [DataService, DataRepository],
  controllers: [DataController]
})
export class DataModule {}
