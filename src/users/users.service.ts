import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  getAll() {
    return this.userRepository.find();
  }

  getById(id: number) {
    return this.userRepository.findOne(id);
  }

  create(cat: UserEntity) {
    const creater = this.userRepository.create(cat);
    this.userRepository.save(creater);
  }
  async remover(id) {
    try {
      await this.userRepository.delete(id);
    } catch (e) {
      console.log(e);
    }
  }
}
