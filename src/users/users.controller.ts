import { UsersService } from './users.service';

import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserEntity } from 'src/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Post()
  created(@Body() user: UserEntity) {
    return this.userService.create(user);
  }
  @Delete(':id')
  remove(@Param('id') id) {
    return this.userService.remover(id);
  }
}
