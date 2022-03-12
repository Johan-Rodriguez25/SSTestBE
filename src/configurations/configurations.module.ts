import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {ConfigurationsController} from './configurations.controller'
import {ConfigurationsService} from './configurations.service'
import {ConfigurationsRepository} from './configurations.repository'
import {TableType, TableTypeSchema} from './schemas/tableType.schema'
import {
  TableStructure,
  TableStructureSchema
} from './schemas/tableStructure.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: TableType.name, schema: TableTypeSchema},
      {name: TableStructure.name, schema: TableStructureSchema}
    ])
  ],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService, ConfigurationsRepository]
})
export class ConfigurationsModule {}
