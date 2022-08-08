import { Injectable } from "@nestjs/common";
import { Proj, transform, toPoint } from "proj4";
export type Feature = {
  type: string;
  properties: object;
  geometry: {
    type: string;
    coordinates: Array<number>;
  };
};
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

  generateRandomCoordinates(count: number, crs: string): Array<Feature> {
    const randomCoordinates: Array<Feature> = [];
    const minMax = this.getMinMax(crs);

    for (let index = 0; index < count; index++) {
      const x = this.getRandom(minMax[0],minMax[2]);
      const y = this.getRandom(minMax[1],minMax[3]) ;

      const ft: Feature = {
        type: "Feature",
        properties: {
          id: index,
        },
        geometry: {
          type: "Point",
          coordinates: [x,y], 
        }
      };
      randomCoordinates.push(ft)
    }
    return randomCoordinates;
  }

  getMinMax(crs: string): Array<number>{
    if (crs === "wgs84") {
      //min x, min y, max x, max y
      return [32.457091, -17.440301, 35.944657, -8.809064]
    }else{
      return [];
    }
  }
  getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
}
