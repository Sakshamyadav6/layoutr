import { formatDistanceToNow } from "date-fns";

export const date = (data) => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};
