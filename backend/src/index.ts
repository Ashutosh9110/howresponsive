import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv'
import authRouter from './routes/authRoutes'
import { connectDB } from './db/db';


dotenv.config();

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.use('/auth',authRouter)

app.post('/fetch-website', async (req: Request, res: Response) => {
  let { url } = req.body;

  if (!url) {
    res.status(400).json({ error: 'URL is required' });
    return
  }

  // Ensure protocol is included
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    if (url.startsWith('localhost') || url.startsWith('127.0.0.1')) {
      url = `http://${url}`; // Localhost usually runs on HTTP
    } else {
      url = `https://${url}`;
    }
  }

  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
    });
    res.send(response.data);
  } catch (error: any) {
    console.error('Error fetching website:', error.message);
    res.status(500).json({ error: `Failed to fetch website: ${error.message}` });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});