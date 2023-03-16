// https://www.codewars.com/kata/51eead3461ccf7db04000017/train/javascript

class UriBuilder {
  constructor (url) {

    const urlReResult = /(.*com)\?(.*)/g.exec(url.replace(/\s/g,'%20'));

    this.url = urlReResult[1];
    this.params = urlReResult[2].split('&').reduce((a, v) => ({ ...a, [v.replace(/=.*/, '')]: v.replace(/.*=/, '') }), {});
  }

  build() {
    // loop through params to build string
    const params = [];
    for (const key in this.params) {
      params.push(`${key}=${this.params[key]}`);
    }

    return (this.url + (!params ? '' : `?${params.join('&')}`)).replace(/\s/g, '%20');
  }
}

var root = 'http://www.codewars.com'
var builder = new UriBuilder(root + '?a=boy girl')
builder.params.b = "a b"

console.log(builder.build());