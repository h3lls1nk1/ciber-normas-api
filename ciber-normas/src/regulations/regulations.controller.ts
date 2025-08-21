import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RegulationsService } from './regulations.service';
import { Regulation } from './entities/regulation.entity';

@Controller('regulations')
export class RegulationsController {
    constructor (private readonly regulationsService: RegulationsService) {}

    @Post()
    create(@Body() body: Partial<Regulation>) {
        return this.regulationsService.create(body);
    }

    @Get()
    findAll() {
        return this.regulationsService.findAll();
    }
}
