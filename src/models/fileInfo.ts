

class fileInfo{
    parentDirectory: string;
    displayName: string;
    contents: string;
    constructor(fullPath: string, displayName: string){
        this.parentDirectory = fullPath;
        this.displayName = displayName;
    }
    
    fullPath(){
        return this.parentDirectory+this.displayName;
    }
}