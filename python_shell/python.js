let {PythonShell} = require('python-shell');

let options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'],
    scriptPath: '',
    args: ['value1', 'value2', 'value3']
};

PythonShell.run('test.py', options, function(err, result){
    if(err){
        console.log(err);
    }else{
        console.log(`results: ${result}`);
    }
})