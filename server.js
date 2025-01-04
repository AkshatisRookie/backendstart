import express from 'express'
import { title } from 'process';
const app = express();

const port = process.env.PORT || 3000;

//app.get('/', (req, res) => {
//  res.send('Server is running');
//});

app.get('/api/intern',(req,res)=>{ 
  const jokes = [
    {
      id:1,
      title: 'Google',
      content: 'congratulations you have got an offer'
    },
    {
      id:2,
      title: 'Amazon',
      content:'hey you are able to qualify all amazon rounds'
    },
    {
      id:3,
      title:'swiggy',
      content: 'swiggy internship qualified'
    }
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
