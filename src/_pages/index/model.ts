import { createQuery } from "@farfetched/core";
import { createEffect, createEvent, sample } from "effector";
import { debug } from "patronum";

export const getPageContentQuery = createQuery({
  handler: createEffect(() => ({ data: { users: [{ id: 1, name: "Ivan" }] } })),
});

export const pageStarted = createEvent();

sample({
  clock: pageStarted,
  target: getPageContentQuery.start,
});

debug(getPageContentQuery.$data);
