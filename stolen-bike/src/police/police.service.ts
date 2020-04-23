import { Injectable, Inject} from '@nestjs/common';
import { CreatePoliceDto } from './dto/createPolice.dto';
import { UpdatePoliceDto } from './dto/updatePolice.dto';
import { PoliceDto } from './dto/police.dto'
import { Police } from './police.entity';

@Injectable()
export class PoliceService {

  constructor(
    @Inject('PoliceRepository') private readonly policeRepository: typeof Police
  ) {}

  async findAll(): Promise<Police[]> {
    return await this.policeRepository.findAll<Police>();
  }

  async findById(ID: number): Promise<Police> {
    return await this.policeRepository.findByPk<Police>(ID);
  }
  async create(createPoliceDto: CreatePoliceDto): Promise<Police> {
    return await this.policeRepository.create<Police>(createPoliceDto);
  }

  async update(id: number, newValue: UpdatePoliceDto): Promise<Police | null> {

    let police = await this.policeRepository.findByPk<Police>(id);

    if (!police.id) {
      // tslint:disable-next-line:no-console
      console.error('user doesn\'t exist');
    }

    police = this._assign(police, newValue);

    return await police.save();
  }

  public async delete(ID: number): Promise<number> {

    return await this.policeRepository.destroy({
      where: { ID },
    });
  }

  private _assign(police: CreatePoliceDto, newValue: CreatePoliceDto): Police {
    // tslint:disable-next-line:no-string-literal
    for (const key of Object.keys(police['dataValues'])) {
      if (police[key] !== newValue[key]) {
        //
        police[key] = newValue[key];
      }
    }
    return police as Police;
  }
}