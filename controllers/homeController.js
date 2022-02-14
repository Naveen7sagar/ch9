// import path from 'path'
// path.join()
import { join } from 'path';

const homeController = (req,res)=>{
    // res.send('<h1>home page</h1>')
    // res.sendFile('D:\\CRUD\\Express_generator\\ch9\\views\\home.html')
    console.log(join(process.cwd(),'views','home.html'))
    res.sendFile(join(process.cwd(),'views','home.html'))
}
export {homeController}