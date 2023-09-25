const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {

    res.send('Hello World api is working!');


});
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);

});


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));






//app.post()
//app.put()
//app.delete()




