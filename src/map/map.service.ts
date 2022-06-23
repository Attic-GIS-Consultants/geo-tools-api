import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Map, MapDocument } from "./schemas/map.schema";
@Injectable()
export class MapService {
  constructor(@InjectModel(Map.name) private mapModel: Model<MapDocument>) {}

  async createMap(createMap: Map): Promise<Map> {
    const createdMap = new this.mapModel(createMap);
    return createdMap.save();
  }

  async getAll(): Promise<Array<Map>> {
    return this.mapModel.find({});
  }

  async findOneMap(id: string): Promise<Map> {
    return this.mapModel.findById(id);
  }
}
