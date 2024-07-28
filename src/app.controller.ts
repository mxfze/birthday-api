import { Controller, Get, ParseUUIDPipe, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { data } from './data';
import { AddBirthdayDto, UpdateBirthdayDto } from './dtos/date.dto';

@Controller("birthdays")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllDates() {
    return this.appService.getAllDates();
  }

  @Get(":id")
  getDateByID(@Param('id', ParseUUIDPipe ) id: string ) {
    return this.appService.getDateById(id)
  }

  @Post()
  addDate(@Body() {email, date, name}: AddBirthdayDto){
    return this.appService.createBirthday({email, date, name})
  }

  @Put(":id")
  updateBirthday(@Param("id", ParseUUIDPipe) id: string, @Body() body: UpdateBirthdayDto){
    return this.appService.updateBirthday(id, body)
  }

  @Delete(":id")
  deleteBirthday(@Param("id", ParseUUIDPipe) id: string) {
    return this.appService.deleteBirthday(id)
  }

}
