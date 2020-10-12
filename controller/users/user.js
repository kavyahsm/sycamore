const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config=require('config')
const User=require('../../model/users/user');


const maxAge = 3 * 24 * 60 * 60

const createToken = (id) =>{

return jwt.sign({id},  config.get('jwtSecret'), {
    expiresIn:maxAge
})

}



exports.register = async (req, res) =>{

    const {user_name,password,confirm_password,phone_number,} = req.body

    try {
   
        if(password !== confirm_password ){

            return res.status(401).json("password is not matched")
     
     }

    const user = new User({

        user_name,
        password,
        phone_number

    })



    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt) 

    await user.save();

   const token =  createToken(user._id);

   res.status(201).json({token})

   
    } catch (error) {

        
        res.status(401).json({err:"Somthing Went Wrong !",error})
        
    }

}

exports.login = async (req, res) => {
 
const {user_name, password} = req.body

 try{
        
       const user = await User.findOne({user_name:user_name})

        if(!user) {

                return res.status(400).json({msg:'invalid credentials'})

              }
    
       const isMatch = await bcrypt.compare(password, user.password)
            
       if(!isMatch) {

        return  res.status(400).json({msg:'invalid credentials'})
    }

  const token = createToken(user._id);
  res.status(201).json({token, user})

 }catch(error){

    res.status(401).json({err:"Somthing Went Wrong !",error})

 }

}




exports.getAllUser = async (req,res)=>{

try {
    
    const users=await User.find({})


    res.status(201).json({msg:"Succefully", users})

} catch (error) {

  res.status(401).json({err:"Somthing Went Wrong !",error})

}

}

exports.updateUser = async (req,res)=>{

    try {
        
     const user = await User.updateOne({_id:req.params.id}, req.body)
        res.status(201).json({msg:"update Succefully", user})
    
    } catch (error) {
    
                res.status(401).json({err:"Somthing Went Wrong !",error})
    
    }
    
    }

exports.deleteUser = async (req,res)=>{

        try {
            
            const user = await User.deleteOne({_id:req.params.id})
            res.status(201).json({msg:"deleted Succefully",user})
        
        } catch (error) {
        
                    res.status(401).json({err:"Somthing Went Wrong !",error})
        
        }
        
        }

exports.isAuthenticate = async (req, res, next) =>{



if(
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')

){

    try {
        
       let token = req.headers.authorization.split(' ')[1]
       
        const decoded = jwt.verify(token, config.get('jwtSecret'))
    
        req.user = await User.findById(decoded.id).select('-password');
        next()

    } catch (error) {

        res.status(401).json({error:error.message})
    
    }
}

}




exports.userProfile = async (req, res)=>{

    try {

       const user = await User.findById(req.user._id).select('-password')

       if(!user) {

        return res.status(401).json({json:"no Authorization"})
       }

    res.status(201).json(user) 

    } catch (error) {
            res.status(401).json({msg:"Somthing went wrong"}) 

    }


}