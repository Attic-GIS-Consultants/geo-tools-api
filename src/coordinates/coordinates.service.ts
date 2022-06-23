import { Injectable } from "@nestjs/common";
import { Proj, transform, toPoint } from "proj4";
@Injectable()
export class CoordinatesService {
  convertCoordinates(coordinate: { lat: number; lon: number }, unit: string) {
    const degreeProj = Proj("WGS84");
    const meterProj = Proj("+proj=utm +zone=36 +south +datum=WGS84 +units=m +no_defs");
    const x = coordinate.lon;
    const y = coordinate.lat;
    const p = toPoint([x, y]);

    if (unit == "meters") {
      const r = transform(meterProj, degreeProj, p);
      return r;
    } else {
      const r = transform(degreeProj, meterProj, p);
      return r;
    }
  }
}
