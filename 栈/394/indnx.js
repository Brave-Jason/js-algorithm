var decodeString = function (s) {
    let strArr = []; // 保存需要 repeat 的字符串
    let multiple = ''; // 乘以的倍数

    for (let i = 0, len = s.length; i < len; i++) {
        let item = s[i];

        if (/[0-9]/.test(item)) {
            if (i === 0 || /[0-9]/.test(s[i - 1])) {
                multiple += item;
            } else {
                multiple = item
            }
        } else if (item === '[') {
            multiple && strArr.push(Number(multiple));
            multiple = '';
        } else if (item === ']') {
            var curr = strArr.pop();
            var temp = '';
            while (typeof curr !== 'number') {
                temp = curr + temp;
                curr = strArr.pop();
            }
            temp = temp.repeat(curr);
            strArr.push(temp);
        } else {
            strArr.push(item);
        }
    }
    return strArr.join('');
};