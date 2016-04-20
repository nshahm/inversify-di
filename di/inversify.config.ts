/// <reference path="../node_modules/inversify/type_definitions/inversify/inversify.d.ts" />

import { Kernel } from "inversify";
import { IVehicle } from "./IVehicle";
import {ITest } from "./ITest";
import  Car  from "./Car";
import Truck from "./Truck";

import Test from "./Test";


let kernel:inversify.IKernel = new Kernel();

//kernel.bind("IVehicle").to(Car);


kernel.bind<IVehicle>("IVehicle").to(Car).inSingletonScope();
kernel.bind<ITest>("ITest").to(Test).inSingletonScope();
//kernel.bind<IVehicle>("IVehicle").to(Truck).whenTargetNamed('Truck');

export default kernel;