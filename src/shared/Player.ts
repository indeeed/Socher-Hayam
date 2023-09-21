import { Entity, Fields } from "remult";

@Entity("player", {
  allowApiCrud: true,
})
export class Player {
  @Fields.cuid()
  id = "";

  @Fields.string()
  name = "";

  @Fields.number()
  money = 0;

  @Fields.object()
  location = Location["Jerusalem"];

  @Fields.object()
  items = Items;
}

export enum Location {
  "Jerusalem",
  "Haifa",
  "Tel-Aviv",
}
export enum Items {
  wood = 0,
  gold = 0,
  diamond = 0,
}
