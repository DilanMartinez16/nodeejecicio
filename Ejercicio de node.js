
var fs=require('fs')

fs.mkdirSync('Carpetanode')

fs.mkdirSync('Carpetanode',(error)=>{
if(error){
 throw error;
}
})

var fs=require(`fs`)

 var archivo='node.txt'
 var mas='Hola mundo de node'

 if(fs.existsSync(archivo)){
          console.log('esta')
     }
      else{
          console.log('no esta')
      } 

 fs.writeFileSync(archivo,mas)

 var file= fs.readSync('./')
 var esc=fs.readFileSync(archivo,'utf-8')
 console.log(esc)

var fs=require('fs')

fs.renameSync('./node.txt','./Carpetanode/node.txt') 

var fs=require('fs')

fs.mkdirSync('Carpetanode2')

fs.mkdirSync('Carpetanode2',(error)=>{
    if(error){
        throw error;
    }
})
 
var fs=require('fs')
fs.renameSync('./Carpetanode/node.txt','./Carpetanode2/node.txt') 

var fs=require('fs')
fs.unlinkSync('./Carpetanode2/node.txt')

require('fs').rmdirSync('Carpetanode2');


require('fs').rmdirSync('Carpetanode');


const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'Carpetanode2');

fs.rmdir(folderPath, (err) => {
if (err) {
console.error('Error al eliminar:', err);
return;
}
console.log('Carpeta eliminada');
});

