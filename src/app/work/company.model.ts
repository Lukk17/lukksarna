export class Company {
    public date: string;
    public name: string;
    public location: string;
    public position: string;
    public expanded: boolean;


    constructor(date: string, name: string, location: string, position: string, expanded: boolean) {
        this.date = date;
        this.name = name;
        this.location = location;
        this.position = position;
        this.expanded = expanded;
    }
}
