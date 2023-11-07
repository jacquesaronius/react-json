
function ActiveDirectory() {
  const ActiveDirectory = require('activedirectory2')
    const config = { url: 'ldap://dc.domain.com',
                     baseDN: 'dc=domain,dc=com',
                     username: 'user',
                     password: 'p@ssw0rd' };

    const ad = new ActiveDirectory(config);

    return ad;
}

export default ActiveDirectory;