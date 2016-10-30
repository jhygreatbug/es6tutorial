var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var files = fs.readdirSync('./src/docs');

files.forEach(function (fileName) {
    fs.readFile(path.join('./src/docs', fileName), function (err, data) {
        var text = String(data);
        var newText = text.replace(/```javascript([\s\S]*?)```/g, function (match, p1, offset, string) {
            var es5Code = null;
            try {
                es5Code = babel.transform(p1, {
                  'presets': ['es2015', 'stage-3'],
                  'plugins': ['transform-runtime']
                }).code;
            } catch (e) {
                console.log('=========================================');
                console.log(fileName + '编译错误：');
                console.log(p1);
                console.log(e.name + ': ' + e.message);
            }
            return es5Code ? match + '\n```javascript\n' + es5Code + '```' : match;
        });
        fs.writeFile('./dist/docs/' + fileName, newText, 'utf8');
    });
});
