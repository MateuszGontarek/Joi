import  express  from "express";
import { Joi, validate } from 'express-validation';

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use(express.json());


const schema = Joi.object({
    email: Joi.string().email().min(5).required(),
    password: Joi.string().min(8).max(50).required()
});
app.post('/login', validate({ body: schema }), (req, res, next) => {
        const { body } = req;
        const { email, password } = body;
        
    
        res.status(200).json({ status: "success", payload: { } });
});

app.use((err, req, res, next) => {
    res.status(500).json({ status: "error", error: err.message });
});