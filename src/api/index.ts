import { Hono } from 'hono';
import { cors } from "hono/cors"

const app = new Hono()
  .basePath('api');

app.use(cors({
  origin: "*"
}))

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

app.get('/youtube', async (c) => {
  try {
    const response = await fetch("https://www.youtube.com/feeds/videos.xml?channel_id=UCmJYcx0T8qrgVDWnfIsYsHg");
    const xml = await response.text();
    
    // Simple regex-based extraction for titles and descriptions
    // Since we don't have a full XML parser in this environment easily
    const entries = xml.match(/<entry>[\s\S]*?<\/entry>/g) || [];
    
    const videos = entries.map(entry => {
      const title = entry.match(/<title>([\s\S]*?)<\/title>/)?.[1] || "";
      const videoId = entry.match(/<yt:videoId>([\s\S]*?)<\/yt:videoId>/)?.[1] || "";
      const description = entry.match(/<media:description>([\s\S]*?)<\/media:description>/)?.[1] || "";
      const thumbnail = entry.match(/<media:thumbnail url="([\s\S]*?)"/)?.[1] || "";
      
      return { title, videoId, description, thumbnail };
    });

    return c.json({ videos });
  } catch (error) {
    return c.json({ error: "Failed to fetch YouTube data" }, 500);
  }
});

export default app;