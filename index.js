// server.js
const express = require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const connectToDB = require("./src/config/db");

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());



// Middleware
app.use(bodyParser.json());


const homeRouter=require("./src/routes/home.router.js")

app.use("/",homeRouter);

const authRouter=require("./src/routes/authRoutes.js")
app.use("/auth",authRouter)

const userRouter=require("./src/routes/userRoutes.js");
app.use("/api/users",userRouter)

const foodRouter=require("./src/routes/menuItemRoutes.js");
app.use("/api/food",foodRouter);

const adminfoodRouter=require("./src/routes/adminMenuItemRoutes.js");
app.use("/api/admin/food",adminfoodRouter);

const categoryRouter=require("./src/routes/categoryRoutes.js");
app.use("/api/category",categoryRouter);

const adminCategoryRouter=require("./src/routes/adminCategoryRoutes.js");
app.use("/api/admin/category",adminCategoryRouter);

const adminIngredientRouter=require("./src/routes/adminIngredientRoutes.js");
app.use("/api/admin/ingredients",adminIngredientRouter);

const cartRouter=require("./src/routes/cartRoutes.js")
app.use("/api/cart", cartRouter);

const cartItemRouter=require("./src/routes/cartItemRoutes.js")
app.use("/api/cart-item",cartItemRouter);

const orderRouter=require("./src/routes/orderRoutes.js");
app.use("/api/order",orderRouter);

const adminOrderRoutes=require("./src/routes/adminOrderRoutes.js");
app.use("/api/admin/order",adminOrderRoutes);

const restaurantRouter=require("./src/routes/restaurantRoutes.js");
app.use('/api/restaurants',restaurantRouter)

const adminRestaurantRouter=require("./src/routes/adminRestaurantRoutes.js");
app.use('/api/admin/restaurants',adminRestaurantRouter)

const eventRoutes=require("./src/routes/eventRoutes.js");
app.use('/api/events',eventRoutes)

const adminEventRoutes=require("./src/routes/adminEventRoutes.js")
app.use("/api/admin/events",adminEventRoutes)



app.listen(PORT,async ()=>{
    await connectToDB()
    console.log("food ordering server running on port ",PORT)
})



