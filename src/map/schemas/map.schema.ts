import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

type Layer = {
  name: string;
  features: Array<Feature>;
  style: object;
};
type Feature = {
  type: string;
  properties: object;
  geometry: object;
};

export type MapDocument = Map & Document;

@Schema()
export class Map {
  @Prop()
  name: string;

  @Prop()
  layers: Array<Layer>;

  @Prop()
  layerListOrder: Array<string>;
}

export const MapSchema = SchemaFactory.createForClass(Map);
