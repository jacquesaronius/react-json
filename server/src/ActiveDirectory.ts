
import activedirectory2 = require('activedirectory2')

class ActiveDirectory {
  
  private ad:activedirectory2;

  private async authenticate() {
    let authenticated = await this.ad.authenticate("DOGHOUSE\\user", 'p@ssw0rd', function(err, auth) {
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
                   username: 'DOGHOUSE\\user',
                   password: 'p@ssw0rd' };

    this.ad = new activedirectory2(config);
  }

  async getComputers(dn:string, attributes:string[] = ['dn', 'cn', 'name', 'description']) {
    // this.authenticate();
    var opts = {
      baseDN: dn,
      filter: `(&(objectClass=computer))`,
      scope: 'sub',
      attributes: attributes
    }

    let x = await this.ad.find(opts, function(err, results) {
      if ((err) || (! results)) {
        console.log('ERROR: ' + JSON.stringify(err));
        return;
      }
      console.log('getComputers(' + dn + ') = ' + JSON.stringify(results));
      return results;
    });
    console.log(`x = ${x}`)
    return x;
  }

}

export = ActiveDirectory;