import { UA } from './src/ua';

var ua = new UA(10);

ua.union(1, 4);
ua.union(4, 5);
console.log(ua.connected(1, 4));    //true
console.log(ua.connected(2, 4));    //false
ua.union(2, 7);
ua.union(1, 7);
console.log(ua.connected(2, 4));    //true
