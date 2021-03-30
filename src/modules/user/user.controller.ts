import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, ListUserDTO } from './dto';
// import { User } from './user.decorator';
// import { ValidationPipe } from '../shared/pipes/validation.pipe';

@Controller()
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get('users')
  async findAll(): Promise<ListUserDTO[]> {
    return await this.userService.findAll();
  }

  // @Get('user')
  // async findByEmail(@User('email') email: string): Promise<ListUserDTO> {
  //   // return await this.userService.findByEmail(email);
  // }

  // @Put('user')
  // async update(@User('id') userId: number, @Body('user') userData: UpdateUserDto) {
  //   // return await this.userService.update(userId, userData);
  // }

  // @UsePipes(new ValidationPipe())
  @Post('users')
  async create(@Body() userData: CreateUserDto) {
    console.log(userData)

    return this.userService.create(userData);
  }

  // @Delete('users/:slug')
  // async delete(@Param() params) {
  //   // return await this.userService.delete(params.slug);
  // }
}