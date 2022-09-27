const fs = require('fs');

if(!fs.existsSync('./new')){

    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory created')
    })
    
}


// this module is for creating directory!!!