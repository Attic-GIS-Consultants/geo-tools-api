import { Controller, Post, Get, Req, Res, Param } from "@nestjs/common";
import { MapService } from "./map.service";

import { Request, Response } from "express";
import { Map } from "./schemas/map.schema";
@Controller("map")
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Post()
  createMap(@Req() req: Request): Promise<Map> {
    console.log(req.body);
    return this.mapService.createMap(req.body);
  }

  @Get("/all")
  getAllMaps(): Promise<Array<Map>> {
    return this.mapService.getAll();
  }

  @Get("/specific/:id")
  getSpecificMap(@Param() param): Promise<Map> {
    return this.mapService.findOneMap(param.id);
  }
}
