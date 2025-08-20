import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Regulation } from './regulation.entity';

@Injectable()
export class RegulationsService {
    constructor(
        @InjectRepository(Regulation)
        private readonly regulationRepository: Repository<Regulation>
    ) {}

    create(data: Partial<Regulation>) {
        const newRegulation = this.regulationRepository.create(data);

        return this.regulationRepository.save(newRegulation);
    }

    findAll() {
        return this.regulationRepository.find();
    }

    findOne(id: number) {
        return this.regulationRepository.findOneBy({ id });
    }
}
