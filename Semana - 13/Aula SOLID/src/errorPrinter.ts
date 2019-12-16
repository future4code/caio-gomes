import * as moment from 'moment';

export class ErrorPrinter {
  public onError(error: string, date: moment.Moment): void {
    console.log(
      error,
      ' - ',
      date.utcOffset('-0300').format('DD/MM/YYYY HH:mm')
    );
  }
}
