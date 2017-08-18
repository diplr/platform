export class KdfParams {

  constructor(public n: number, public r: number, public p: number, public salt: string, public dklen: number){}

}
