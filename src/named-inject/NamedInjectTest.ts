
import {injectable , inject, named }  from "inversify";

import { IVehicle } from "./IVehicle";

import { INamedInjectTest } from "./INamedInjectTest";

@injectable()
export default class NamedInjectTest implements INamedInjectTest {
    
     constructor(@inject("IVehicle") @named("truck") vehicle:IVehicle) {
         _vehicle = vehicle;
     }
    
    init() : string  {
       return  _vehicle.drive();
    }
}

let _vehicle:IVehicle;