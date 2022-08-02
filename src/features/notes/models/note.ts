export class Note {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public createdAt: string,
    public editedat: string,
    public ownerId: string
  ) {}
}
