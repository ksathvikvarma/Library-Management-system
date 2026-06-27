const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


const registerUser = async (req, res) => {
    try{
        const {name, email, password, role} = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "User already exists",
        });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        await User.create({
        name,
        email,
        password: hashedPassword,
        role,
        });

        // Success response
        return res.status(201).json({
        success: true,
        message: "User registered successfully",
        });

    } catch(error){
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

         if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
            );

            return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            });

    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message,
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
};