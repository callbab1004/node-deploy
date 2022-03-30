const app = require('./app');

app.listen(app.get('post'), () => {
    console.log(app.get('post'), '번 포트에서 대기중');
});