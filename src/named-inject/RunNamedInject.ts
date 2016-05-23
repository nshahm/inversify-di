
import "reflect-metadata";
import  kernel  from "./inversify.config";
import { INamedInjectTest } from "./INamedInjectTest";

import { IVehicle } from "./IVehicle";

/**
 * Named binding
 */

/**
 * Invoking basic @inject
 */
console.log(kernel.getNamed<IVehicle>("IVehicle", "truck").drive());
console.log("INamedInjectTest (@inject IVehicle)--> " + kernel.get<INamedInjectTest>("INamedInjectTest").init());
