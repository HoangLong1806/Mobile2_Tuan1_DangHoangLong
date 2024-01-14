class TamGiac {
    constructor(private ma:number, private mb:number, private mc:number){}

    public setMa(ma: number) : void{
        this.ma = ma;
    }

    public getMa() : number{
        return this.ma;
    }

    public setMb(mb: number) : void{
        this.mb = mb;
    }

    public getMb() : number{
        return this.mb;
    }

    public setMc(mc: number) : void{
        this.mc = mc;
    }

    public getMc() : number{
        return this.mc;
    }

    public tinhChuVi() : number{
        return (this.ma + this.mb + this.mc)
    }

    public tinhDienTich(): number{
        let p = this.tinhChuVi()/2
        let s = Math.sqrt(p*(p-this.ma)*(p-this.mb)*(p-this.mc))
        return s;
    }

    public typeTamGiac() : String{
        if(!this.checkTamGiac()){
            return "Khong Phai Tam Giac"
        }else{
            if(this.ma === this.mb && this.mb === this.mc){
                return "Tam Giac Deu";
            }else if((this.ma === this.mb  && this.mb !== this.mc) || (this.mc === this.ma && this.ma !== this.mb)){
                return "Tam Giac Can";
            }else if((Math.pow(this.ma, 2) + Math.pow(this.mb, 2) === Math.pow(this.mc, 2)) ||
                (Math.pow(this.ma, 2) + Math.pow(this.mc, 2) === Math.pow(this.mb, 2)) ||
                (Math.pow(this.mb, 2) + Math.pow(this.mc, 2) === Math.pow(this.ma, 2))){
                return "Tam Giac Vuong";
            }else{
                return "Tam Giac Thuong";
            }
        }
    }

    public checkTamGiac() : boolean{
        if((this.ma + this.mb > this.mc) && (this.ma + this.mc > this.mb) && (this.mb + this.mc > this.ma)){
            return true;
        }
        return false;
    }

    public toString(): string{
        return `Tam giac abc có a = ${this.ma} b =  ${this.mb} c = ${this.mc}`
    }
}

export default TamGiac