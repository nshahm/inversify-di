
import { Kernel } from "inversify";
import { IVehicle } from "./IVehicle";
import {IInjectTest } from "./IInjectTest";
import  Car  from "./Car";
import Truck from "./Truck";

import InjectTest from "./InjectTest";


let kernel:inversify.IKernel = new Kernel();

//kernel.bind("IVehicle").to(Car);


kernel.bind<IVehicle>("IVehicle").to(Car).inSingletonScope();
//kernel.bind<IVehicle>("IVehicle").to(Truck).inSingletonScope();
kernel.bind<IInjectTest>("IInjectTest").to(InjectTest).inSingletonScope();
export default kernel;