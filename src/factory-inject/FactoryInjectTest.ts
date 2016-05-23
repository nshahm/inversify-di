import {injectable , inject, named, IFactory }  from "inversify";

import { IVehicle } from "./IVehicle";

import { IFactoryInjectTest } from "./IFactoryInjectTest";

@injectable()
export default class FactoryInjectTest implements IFactoryInjectTest {
    
     private vehicle = "truck";
     constructor(@inject("IFactory<IVehicle>") vehicleFactory: IFactory<IVehicle>) {
         _vehicle = vehicleFactory(this.vehicle);
     }
    
    init() : string  {
       return  _vehicle.drive();
    }
}

let _vehicle:any;
