
const {
    ApplicationX, Cart, Product,
    Credential
} = require('../application');


const {
    Product,
    Credential
} = require('../platform');


const cred = new Credential({
    ApplicationId: "507f1f77bcf86cd799439011",
    ApplicationToken: "APP_TOKEN"
});

const app = new ApplicationX(cred);
const cart = new Cart(cred);
const prodcut = new Product(cred);


app.AppAllAccessPermissions()
    .then(d => {
        console.log(d);
    })
    .catch(err => {
        console.error(err);
    })

app.AppDetail()
    .then(d => {
        console.log(d);
    })
    .catch(err => {
        console.error(err);
    })
