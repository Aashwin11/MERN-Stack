// work only when package.json has type "module"

import { calcSum } from "./4part2b.js";



var a=20;
var b=10;
import {inc}  from "./4part2b.js";
b=b+inc;
calcSum(a,b);

