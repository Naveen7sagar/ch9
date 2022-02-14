import { join } from 'path'

const aboutController = (req,res)=>{
    // res.send('about page')
    // res.sendFile('D:\\CRUD\\Express_generator\\ch9\\views\\about.html')
    console.log(join(process.cwd(),"views","about.html"))
    res.sendFile(join(process.cwd(),"views","about.html"))
}
export {aboutController}