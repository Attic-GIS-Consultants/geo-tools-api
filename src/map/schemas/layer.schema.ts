import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type LayerDocument = Layer & Document;

@Schema()
export class Layer {
  @Prop()
  name: string;

  @Prop()
  layers: Array<Layer>;

  @Prop()
  layerListOrder: Array<string>;
}

export const LayerSchema = SchemaFactory.createForClass(Layer);
