// https://date-fns.org/docs/I18n

import { format, fromUnixTime } from "date-fns";
import { pl } from "date-fns/locale";

export default function(date, formatStr = "PP") {
  let dateToFormat = fromUnixTime(date);

  return format(new Date(dateToFormat), formatStr, {
    locale: pl
  });
}
