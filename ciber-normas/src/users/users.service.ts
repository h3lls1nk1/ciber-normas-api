import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User | null> {
        return this.userRepository.findOneBy({ id });
    }

    findByUsername(username: string): Promise<User | null> {
        return this.userRepository.findOneBy({ username })
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
