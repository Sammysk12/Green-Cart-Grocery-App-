import User from "../models/user.js";



//Update user cart data 
//access public
//api/cart/update
export const updateCart = async (req, res) => {

    try {
        const {userId, cartItems} = req.body;
        await User.findByIdAndUpdate(userId, {cartItems});
        res.json({success : true, message : "Cart Updated!"})

    } catch (error) {
        console.error(error.message);
        return res.json({success: false, message : error.message})
    }

}