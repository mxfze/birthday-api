import { Injectable } from '@nestjs/common';
import { data } from './data';
import {v4 as uuid} from "uuid"

@Injectable()
export class AppService {
  getAllDates() {
    return data.report;
  }

  getDateById(id: string) {
    return data.report.find(report => report.id === id)
  }

  async createBirthday({name, email, date}) {
    const new_date = {
      id: uuid(),
      name,
      email,
      date
    }

    data.report.push(new_date)
    return `Added Birthday for ${email}`
    return new_date;

  }

  updateBirthday(id: string, {email, date, name}) {
    const reportToUpdate = data.report.find(report => report.id === id)
    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex((report) => report.id === reportToUpdate.id);

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...{name},
      ...{email},
      ...{date}

    }

    return data.report[reportIndex]

  }

  deleteBirthday(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1)

    return "Deleted"
  }
}
