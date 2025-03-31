import fs from "fs/promises"
import fsn from "fs"
import path from "path"
const basepath = "D:\\Development\\Vid_91_Clear_the_clutter"
let files = await fs.readdir(basepath)
// console.log(files);


for (const element of files) {
    let ext = element.split(".")[element.split(".").length-1]  //this is the logic to get last name/extentname
    if(ext != "json" && ext != "js" && element.split(".").length > 1){

    if(fsn.existsSync(path.join(basepath , ext ))){
        //move the file into this dir
        fs.rename(path.join(basepath , element) , path.join(basepath , ext , element))
    }else{
        fs.mkdir(ext)
        fs.rename(path.join(basepath , element) , path.join(basepath , ext , element))
    }
    // console.log(element);
}
}