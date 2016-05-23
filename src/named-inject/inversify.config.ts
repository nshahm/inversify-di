
import { Kernel } from "inversify";
import { IVehicle } from "./IVehicle";
import {INamedInjectTest } from "./INamedInjectTest";
import  Car  from "./Car";
import Truck from "./Truck";

import NamedInjectTest from "./NamedInjectTest";


let kernel:inversify.IKernel = new Kernel();

kernel.bind<IVehicle>("IVehicle").to(Car).whenTargetNamed("car");
kernel.bind<IVehicle>("IVehicle").to(Truck).whenTargetNamed("truck");
kernel.bind<INamedInjectTest>("INamedInjectTest").to(NamedInjectTest).inSingletonScope();
    
export default kernel;