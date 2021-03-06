import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoordinatesService } from "./coordinates/coordinates.service";
import { CoordinatesController } from "./coordinates/coordinates.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { MapsModule } from "./map/map.module";
import { ConfigModule } from "@nestjs/config";
@Module({
  imports: [ConfigModule.forRoot(), MapsModule, MongooseModule.forRoot(process.env.db)],
  controllers: [AppController, CoordinatesController],
  providers: [AppService, CoordinatesService],
})
export class AppModule {}
