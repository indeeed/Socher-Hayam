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
  copper = 0,
  silver = 0,
  gold = 0,
}
