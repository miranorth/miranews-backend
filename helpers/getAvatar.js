let getAvatar = (username) => {
    let arr = username.split('');
    let str = arr.map(value => {
        if (value == ' ') {
            return '%20';
        } else {
            return value;
        }
    }).join('');
    let url = `https://api.adorable.io/avatars/285/${str}.png`;
    return url;
}

module.exports = getAvatar;