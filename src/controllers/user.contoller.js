import asyncHandler from "../utils/asyncHandler.js";
import handleApiError from "../utils/handleApiError.js";
import handleApiResponse from "../utils/handleApiResponse.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler( async (req, res) => {
    // step : 1 get data 

    const { username, email, password, mobile } = req.body
    console.log("username : ", username);
    console.log("email : ", email);
    console.log("password : ", password);
    console.log("mobile : ", mobile);

    // step : 2 validate data

    if(
        [username, email, password, mobile].some((field) => field?.trim() === "")
    ){
        throw new handleApiError(400, "All fields are required")
    }

    // step : 3 check user already exist 

    const existedUser = await User.findOne({
        $or : [{username}, {email}]
    })

    if(existedUser){
        throw new handleApiError(400, "User with same username or email already exist")
    }

    const user = await User.create({
        username,
        email,
        password,
        mobile
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")
    // remove password and refreshToken
    
    if(!createdUser){
        throw new handleApiError(500, "Somethinh went wrong while registering User")
    }

    return res.status(201).json(
        new handleApiResponse(200,createdUser, "User Registered Successfully")
    )
})


// login controller
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new handleApiError(400, "Email and password are required");
    }

    
    const user = await User.findOne({ email });
    if (!user) {
        throw new handleApiError(401, "Invalid");
    }

    const isMatch = await user.isPasswordCorrect(password);
    if (!isMatch) {
        throw new handleApiError(401, "Invalid");
    }

    
    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();
    
    user.refreshToken = refreshToken;
    await user.save();

    return res.status(200).json(
        new handleApiResponse(200, { accessToken, refreshToken }, "Login successful")
    );
});

export { registerUser, loginUser }