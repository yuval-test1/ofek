import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  updatedAt?: SortOrder;
};
