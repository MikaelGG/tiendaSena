import express from "express";
import morgan from "morgan";
import cors from "cors";


//routes import
import signIn from "./routes/signIn.routes";
import user from "./routes/user.routes";
import rawMaterial from "./routes/rawMaterial.routes";
import utensil from "./routes/utensil.routes";
import supplier from "./routes/suppliers.routes";
import consumer from "./routes/consumer.routes";
import event from "./routes/event.routes";
import products from "./routes/products.routes";
import invoice from "./routes/invoices.routes";
import dailyBalance from "./routes/dailyBalance.routes";
import monthlyBalance from "./routes/monthlyBalance.routes";
import expiration from "./routes/expiration.routes";
import invoicesProd from "./routes/invoicesProd.routes"


const app = express();

//Settings
app.set("port", 4000); 




//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/signIn", signIn);
app.use("/api/user", user);
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
app.use("/api/invoiceProd", invoicesProd);

export default app;

