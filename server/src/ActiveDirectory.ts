
import activedirectory2 = require('activedirectory2')

class ActiveDirectory {
  
  private ad:activedirectory2;

  private async authenticate() {
    let authenticated = await this.ad.authenticate("user", 'p@ssw0rd', function(err, auth) {
      if (err) {
        console.log('ERROR: ' + JSON.stringify(err));
        return;
      }
      if (auth) {
        console.log('Authenticated!');
        return true;
      }
      else {
        console.log('Authentication failed!');
        return false;
      }
    })
    return authenticated;
  }

  constructor() {

    let config = { url: 'ldap://doghouse.cathouse',
                   baseDN: 'dc=doghouse,dc=cathouse',
                   username: 'user',
                   password: 'p@ssw0rd' };

    this.ad = new activedirectory2(config);
  }

  async getComputers(cn:string) {
    this.authenticate();
    let x = await this.ad.find(cn, function(err, results) {
      if ((err) || (! results)) {
        console.log('ERROR: ' + JSON.stringify(err));
        return;
      }
      console.log('find(' + cn + ') = ' + JSON.stringify(results));
      return results;
    });
    return x;
  }

}

export = ActiveDirectory;