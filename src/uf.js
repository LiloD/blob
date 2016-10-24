export class UF {
    
    constructor(count) {
        this.ids = [];
        this.sz = [];

        for(let i = 0; i < count; ++i){
            this.ids[i] = i;
            this.sz[i] = 1;
        }
    }

    root(i) {
        while(i != this.ids[i]){
            i = this.ids[i];
        }
        return i;
    }

    union(p, q) {
        let rp = this.root(p);
        let rq = this.root(q);

        if(this.sz[rp] < this.sz[rq]){
            this.ids[rp] = this.ids[rq];
            this.sz[rq] += this.sz[rp];
        }else{
            this.ids[rq] = this.ids[rp];
            this.sz[rp] += this.sz[rq];
        }
    }

    connected(p, q) {
        return this.root(p) === this.root(q);
    }
}