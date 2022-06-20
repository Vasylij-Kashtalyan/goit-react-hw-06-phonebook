import { createAction } from "@reduxjs/toolkit";

import { nanoid } from "nanoid";

export const addContact = createAction("phonebook/add", (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});
export const removeContact = createAction("phonebook/delete");
export const filterContacts = createAction("phonebook/filter");
