import {Module} from '@nestjs/common'
import {ConfigModule} from '@nestjs/config'
import {MongooseModule} from '@nestjs/mongoose'
import {DatabaseModule} from './database/database.module'
import {ConfigurationsModule} from './configurations/configurations.module'
import {DataModule} from './data/data.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    ConfigurationsModule,
    DataModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
