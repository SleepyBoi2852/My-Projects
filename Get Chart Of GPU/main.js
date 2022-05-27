var exec = require('child_process').exec;
const fs = require('fs');

(function loop() {
    setTimeout(function () {
        var childa = exec('overdrive5_64.exe -t');
        var resulta = '';
        
        var childb = exec('overdrive5_64.exe -A');
        var resultb = '';
        
        childa.stdout.on('data', function(data) {
            resulta += data.split('\n')[0];
        });
        
        childa.on('close', function() {
            const numerica = resulta.replace(/[a-zA-Z =%.]/g,'')/10;
            console.log(numerica);
            fs.appendFileSync('GPUT.txt', numerica+"\n");
        });
        
        childb.stdout.on('data', function(data) {
            resultb += data.split('\n')[4];
        });
        
        childb.on('close', function() {
            const numericb = resultb.replace(/[a-zA-Z =	%]/g,'');
            console.log(numericb);
            fs.appendFileSync('GPUA.txt', numericb+"\n");
        });
      loop()
    }, 1500);
}());
