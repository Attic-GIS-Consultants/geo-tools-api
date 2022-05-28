import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CoordinatesService } from './coordinates.service';

@Controller('coordinates')
export class CoordinatesController {
  constructor(private readonly coordinateService: CoordinatesService) {}
  @Post('convert')
  convertCoordinates(@Req() req: Request): { lat: number; lon: number } {
    const tempCoords = {
      lat: Number(req.body.lat),
      lon: Number(req.body.lon),
    };

    return this.coordinateService.convertCoordinates(tempCoords);
  }
}
