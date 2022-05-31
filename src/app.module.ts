import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoordinatesService } from "./coordinates/coordinates.service";
import { CoordinatesController } from "./coordinates/coordinates.controller";

@Module({
  imports: [],
  controllers: [AppController, CoordinatesController],
  providers: [AppService, CoordinatesService]
})
export class AppModule {}
