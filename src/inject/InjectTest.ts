import {injectable , inject}  from "inversify";

import { IVehicle } from "./IVehicle";

import { IInjectTest } from "./IInjectTest";

@injectable()
export default class InjectTest implements IInjectTest {
    
     constructor(@inject("IVehicle") vehicle:IVehicle) {
         _vehicle = vehicle;
         
         // console.log("from test" + this._vehicle);
     }
    
    init() : string  {
       return  _vehicle.drive();
    }
}

let _vehicle:IVehicle;