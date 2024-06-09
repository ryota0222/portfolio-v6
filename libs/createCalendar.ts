import { JapaneseCalendar, Calendar } from '@internationalized/date';
import { SupportedCalendars } from '@nextui-org/system';

// createCalendar関数の実装
function createCalendar(identifier: SupportedCalendars): Calendar | null {
  switch (identifier) {
    case 'japanese':
      return new JapaneseCalendar();
    default:
      return null;
  }
}

export default createCalendar;
