import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


app.post('/fetch-website', async (req: Request, res: Response) => {
  const { url } = req.body;

  if (!url) {
    res.status(400).json({ error: 'URL is required' });
    return 
  }

  try {
    const response = await axios.get(url.startsWith('http') ? url : `https://${url}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
      },
    });
    res.send(response.data);
  } catch (error) {
    console.error('Error fetching website:', error);
    res.status(500).json({ error: 'Failed to fetch website content' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});