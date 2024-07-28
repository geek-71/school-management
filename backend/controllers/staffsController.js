import Staff from "../models/Staff.js";

export const getAllStaffs = async(req, res, next) => {
    try{
        const staffs = await Staff.find();
        res.json(staffs)
    }catch(e){
        next(e)
    }
}
export const createStaff = async(req,res,next) => {
    try{
        const staff = new Staff(req.body);
        await staff.save();
        res.status.json(staff)
    }catch(e){
        next(e);
    }
}