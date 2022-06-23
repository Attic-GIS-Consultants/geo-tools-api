import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoordinatesService } from "./coordinates/coordinates.service";
import { CoordinatesController } from "./coordinates/coordinates.controller";
import { MapController } from "./map/map.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { MapsModule } from "./map/map.module";
//import { MapService } from "./map/map.service";
@Module({
  imports: [
    MapsModule,
    MongooseModule.forRoot("mongodb+srv://admin:DizzyAttic99@alpha.7srqq.mongodb.net/test")
  ],
  controllers: [AppController, CoordinatesController],
  providers: [AppService, CoordinatesService]
})
export class AppModule {}
