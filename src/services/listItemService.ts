class listItemService{
    list : Array<listItem>;
    constructor(){
        this.list = [
            new listItem(1, "one", 'this is one')
        ];
    }
    getList():Array<listItem>{
        return this.list;
    }
    getItem(title:String): listItem{
        let item=this.list.find((i)=>i.title==title)
        return item;
    }
    add(item: listItem) {
        this.list.push(item);
    }
}