import { Injectable } from '@nestjs/common';
import { Proj, Point, transform } from 'proj4';
@Injectable()
export class CoordinatesService {
  convertCoordinates(coordinate: { lat: number; lon: number }) {
    const sourceProj = Proj('WGS84');
    const destProj = Proj(
      '+proj=utm +zone=36 +south +datum=WGS84 +units=m +no_defs',
    );
    const x = coordinate.lon;
    const y = coordinate.lat;
    const p = Point(x, y);
    const r = transform(sourceProj, destProj, p);

    return r;
  }
}
