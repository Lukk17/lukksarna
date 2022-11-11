export class Cert {
    public date: string;
    public name: string;
    public issuer: string;
    public link: string;
    public image: string;
    public expanded: boolean;

    constructor(date: string, name: string, issuer: string, link: string, image: string, expanded: boolean) {
        this.date = date;
        this.name = name;
        this.issuer = issuer;
        this.link = link;
        this.image = image;
        this.expanded = expanded;
    }
}
