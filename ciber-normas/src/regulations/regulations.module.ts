import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Regulation } from './entities/regulation.entity';
import { RegulationsService } from './regulations.service';
import { RegulationsController } from './regulations.controller';
import { RegulationChange } from './entities/regulation-change.entity';
import { RegulationPoint } from './entities/regulation-point.entity';
import { PointRequirement } from './entities/point-requirement.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Regulation,
        RegulationChange,
        RegulationPoint,
        PointRequirement,
    ])],
    controllers: [RegulationsController],
    providers: [RegulationsService],
})
export class RegulationsModule {}
