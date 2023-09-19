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
  items = Items;
}

export enum Items {
  copper = 0,
  silver = 0,
  gold = 0,
}
