import { Injectable, Inject} from '@nestjs/common';
import { CreateBikeDto } from './dto/createBike.dto';
import { UpdateBikeDto } from './dto/updateBike.dto';
import { BikeDto } from './dto/bike.dto'
import { Bike } from './bikes.entity';

@Injectable()
export class BikesService {

  constructor(
    @Inject('BikesRepository') private readonly bikesRepository: typeof Bike
  ) {}

  async findAll(): Promise<Bike[]> {
    return await this.bikesRepository.findAll<Bike>();
  }

  async findById(ID: number): Promise<Bike> {
    return await this.bikesRepository.findByPk<Bike>(ID);
  }
  async create(createBikeDto: CreateBikeDto): Promise<Bike> {
    return await this.bikesRepository.create<Bike>(createBikeDto);
  }

  async update(id: number, newValue: UpdateBikeDto): Promise<Bike | null> {

    let bike = await this.bikesRepository.findByPk<Bike>(id);

    if (!bike.id) {
      // tslint:disable-next-line:no-console
      console.error('user doesn\'t exist');
    }

    bike = this._assign(bike, newValue);

    return await bike.save();
  }

  public async delete(ID: number): Promise<number> {

    return await this.bikesRepository.destroy({
      where: { ID },
    });
  }

  private _assign(bike: CreateBikeDto, newValue: CreateBikeDto): Bike {
    // tslint:disable-next-line:no-string-literal
    for (const key of Object.keys(bike['dataValues'])) {
      if (bike[key] !== newValue[key]) {
        //
        bike[key] = newValue[key];
      }
    }
    return bike as Bike;
  }
}