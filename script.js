function normalize(num) {
  // shift decimal place so that 0.1 <= num < 1
  var magnitude = Math.floor(Math.log10(num))
  return num / Math.pow(10, magnitude + 1)
}

function hash(secret) {
  var result = 1;
  for (var i = 0; i < secret.length; i++) {
    result *= Math.pow(i+2, secret[i].charCodeAt(0))
    result = normalize(result)
  }
  return result.toString(36).substring(2)
}

var logins = {
  'ziscenp5bod': 'ella',
  'yz6wwm0yhz' : 'nicole',
  'nqjj185gw2e' : 'flowerjasmine',
  '5drz4t1vxuv' : 'zahara',
  't5u9x3qvoyc' : 'Audrey',
  'gay3fxg357e' : 'Kaylee',
  'i8bqigx0wvm' : 'Minecrafter',
  's1ir1mm02zp' : 'guest1',
  'ok7lp3kdwms' : 'guest2',
  '8at6iyflxhp' : 'guest3',
  '6xhaamjcdps' : 'guest',
  'whbp8gzhmgc' : 'HPlover',
  'iq1yqnhsz0l' : 'Unicorn',
  
}

var logged_in_user = logins[hash(prompt('Enter your password'))];

if (logged_in_user) {
  window.location.href='https://ellabc23.github.io/thefantasyclub/home.html';
  alert(`Welcome, ${logged_in_user}`);
} else {
  alert('There is no user with that password. Try again or sign up! If you forgot, contact the owner.')
}






