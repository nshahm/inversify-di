/// <reference path="node_modules/reflect-metadata/reflect-metadata.d.ts"/>
import "reflect-metadata";
import  kernel  from "./di/inversify.config";
import { ITest } from "./di/ITest";

import { IVehicle } from "./di/IVehicle";

console.log(kernel.get<IVehicle>("IVehicle").drive());
console.log("ITest --> " + kernel.get<ITest>("ITest"));
