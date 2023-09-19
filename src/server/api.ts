import { remultExpress } from "remult/remult-express";

import { Player } from "../shared/Player";

export const api = remultExpress({
  entities: [Player],
});
