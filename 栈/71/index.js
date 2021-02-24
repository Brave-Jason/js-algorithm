var simplifyPath = function (path) {
    path = path.replace(/\/+/g, '/');
    const arr = [];
    path.split('/').forEach(item => {
        if(item) {
            if(item === '..') {
                arr.pop();
            }else if(item !== '.') {
                arr.push(item)
            }
        }
    })
    return '/' + arr.join('/')
}