import { UF } from './src/ua';

var uf = new UF(10);

uf.union(1, 4);
uf.union(4, 5);
console.log(uf.connected(1, 4));    //true
console.log(uf.connected(2, 4));    //false
uf.union(2, 7);
uf.union(1, 7);
console.log(uf.connected(2, 4));    //true
