const UserModel = require("../Models/UserModel");

class UserController {
    async create(req, res){

        const user = await UserModel.create(req.body);

        return res.status(200).json(user);  
    }

//     async read(req, res){
//         try{
//             const user = await UserModel.find();

//             return res.status(200).json(user);
//         } catch(error){  
//             res
//                 .status(500)
//                 .json({message: "It messed up Read-user", error: error.message });
//         }
//     }

//     // async update(req, res){
//     //     try{
//     //         const user = await UserModel.create(req.body);
//     //     } catch(error){
            
//     //     }
//     // }

//     async delete(req, res){
//         try{
//             const { id } = req.params
//             const userFound = await UserModel.findById(id);

//             if(!userFound)
//                 return res
//                     .status(404)
//                     .json({ message: "user not found!" });

//             await userFound.deleteOne();

//             return res.status(200).json({ message: "user delete successfully!"});
//         } catch(error){
//             res
//                 .status(500)
//                 .json({ message: " It messed up delete-user", error: error.message });
            
//         }
//     }
}

module.exports = new UserController();