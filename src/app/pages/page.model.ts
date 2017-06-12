/**
 * Created by Roman on 13.06.2017.
 */
export class Page {
  id:number;
  name:string;
  url:string;
  description:string;

  constructor(id:number, name:string, url:string, description:string,){
    this.id=id;
    this.name=name;
    this.url=url;
    this.description=description;
}
}
