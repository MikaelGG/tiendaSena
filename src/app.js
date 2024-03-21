import express from "express";
import morgan from "morgan";


//routes import
import examp from "./routes/examp.routes";
import signIn from "./routes/signIn.routes";
import signUp from "./routes/signUp.routes";
import rawMaterial from "./routes/rawMaterial.routes";
import utensil from "./routes/utensil.routes";
import supplier from "./routes/supplier.routes";
import consumer from "./routes/consumer.routes";
import event from "./routes/event.routes";
import products from "./routes/products.routes";
import invoice from "./routes/invoice.routes";
import dailyBalance from "./routes/dailyBalance.routes";
import monthlyBalance from "./routes/monthlyBalance.routes";
import expiration from "./routes/expiration.routes";

const app = express();

//Settings
app.set("port", 4000); 

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/addUser", examp);
app.use("/api/signIn", signIn);
app.use("/api/signUp", signUp);
app.use("/api/rawMaterial", rawMaterial);
app.use("/api/utensil", utensil);
app.use("/api/supplier", supplier);
app.use("/api/consumer", consumer);
app.use("/api/event", event);
app.use("/api/products", products);
app.use("/api/invoice", invoice);
app.use("/api/dailyBalance", dailyBalance);
app.use("/api/monthlyBalance", monthlyBalance);
app.use("/api/expiration", expiration); 

export default app;

