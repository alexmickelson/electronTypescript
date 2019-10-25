


class fileInfoService{
    list : Array<fileInfo>;
    directoryPath : string;
    fs: typeof import("fs");

    constructor(fs: typeof import("fs")){
        this.fs = fs;
        this.list = [
            new fileInfo('this/is/one.exe', "one.exe")
        ];
    }
    getList():Array<fileInfo>{
        return this.list;
    }
    getFileContents(title: string): fileInfo{
        var file: fileInfo = this.list.filter(t=> t.displayName == title)[0]
        if(file.contents == null){
            var buffer = this.fs.readFileSync(file.fullPath)
            file.contents = buffer.toString()
        }
        return file;
    }
    add(item: fileInfo) {
        this.list.push(item);
    }

    deleteItem(fullPath: String){
     this.list=this.list.filter((i)=>i.fullPath!=fullPath) 
        
    }

    loadDirectory(path: string){
        this.directoryPath= path;
        var files = this.fs.readdirSync(this.directoryPath);
        this.list= new Array<fileInfo>();
        files.forEach(file=>{
            var info = new fileInfo(this.directoryPath+file, file);
            this.list.push(info);
        })
        
     }
}