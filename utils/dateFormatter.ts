import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function timeSince(dateString: string): string {
  const date = dayjs(dateString);

  return date.fromNow(true);
}
