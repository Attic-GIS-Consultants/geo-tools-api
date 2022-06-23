import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { CoordinatesService } from "./coordinates.service";

@Controller("coordinates")
export class CoordinatesController {
  constructor(private readonly coordinateService: CoordinatesService) {}
  @Post("convert")
  convertCoordinates(@Req() req: Request, @Res() res: Response) {
    /*
        const tempCoords = {
          lat: Number(req.body.lat),
          lon: Number(req.body.lon),
        };
    */
    if (checkUnitToConvert(req.body) === "empty") {
      res.statusCode = 400;
      res.send({ error: " Found no coordinates in body" });
    } else if (checkUnitToConvert(req.body) === "meters") {
      const tempCoords = {
        lat: Number(req.body.meters[1]),
        lon: Number(req.body.meters[0]),
      };
      const body = this.coordinateService.convertCoordinates(tempCoords, "meters");
      res.send({
        degrees: [body.y, body.x],
        meters: req.body.meters,
      });
    } else if (checkUnitToConvert(req.body) === "degrees") {
      const tempCoords = {
        lat: Number(req.body.degrees[1]),
        lon: Number(req.body.degrees[0]),
      };

      const body = this.coordinateService.convertCoordinates(tempCoords, "degrees");

      res.send({
        degrees: req.body.degrees,
        meters: [body.y, body.x],
      });
    } else {
      res.statusCode = 400;
      res.send({
        error: "One pair must have the values you want to change",
      });
    }
  }
}

function checkUnitToConvert(body: { degrees: Array<number>; meters: Array<number> }): string {
  if (body.degrees[0] == 0 && body.degrees[1] == 0 && body.meters[0] == 0 && body.meters[1] == 0) {
    return "empty";
  } else if (body.degrees[0] == 0 && body.degrees[1] == 0) {
    return "meters";
  } else if (body.meters[0] == 0 && body.meters[1] == 0) {
    return "degrees";
  } else {
    return "both meters and degrees can not have values";
  }
}

function addNum(c: number, d: number) {
  const sum: number = c + d;
  console.log(sum);
}
