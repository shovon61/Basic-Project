import { ser } from './interface';

export class vm{
    postId !: number;
    id     !: number;
    name   !: string;
    email  !: any;
    body   !: string;

    init(data:ser){
        this.postId=data.postId;
        this.id=data.id;
        this.name=data.name;
        this.email=data.email;
        this.body=data.body;
    }
}