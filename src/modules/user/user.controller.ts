import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto, ListUserDTO } from './dto';

@Controller()
export class UserController {

  constructor(private readonly userService: UserService) {}

  @Get('users')
  async findAll(): Promise<ListUserDTO[]> {
    return await this.userService.findAll();
  }

  @Get('user/:id')
  async findById(@Param('id') id: string): Promise<ListUserDTO | undefined> {
    return await this.userService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post('user')
  async create(@Body() userData: CreateUserDto) {
    return this.userService.create(userData);
  }

  @Put('user/:id')
  async update(@Param('id') id: string, @Body() userData: UpdateUserDto) {
    return await this.userService.update(id, userData);
  }

  @Delete('user/:id')
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}