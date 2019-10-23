class fileInfoService{
    list : Array<fileInfo>;
    constructor(){
        this.list = [
            new fileInfo('this/is/one.exe', "one.exe")
        ];
    }
    getList():Array<fileInfo>{
        return this.list;
    }
    getItem(fullPath:String): fileInfo{
        let item=this.list.find((i)=>i.fullPath==fullPath)
        return item;
    }
    add(item: fileInfo) {
        this.list.push(item);
    }

    deleteItem(fullPath: String){
     this.list=this.list.filter((i)=>i.fullPath!=fullPath) 
        
    }

    loadDirectory(path: string){
        
    }
}