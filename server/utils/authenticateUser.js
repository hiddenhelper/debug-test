import jwt from 'jsonwebtoken';

import validateInput from './validateInput';

const SingleSignOnKey = 'SingleSignOnKey';

export default async function authenticateUser(request, queryData) {
  const { ssoToken } = queryData;
  const userData = await jwt.verify(ssoToken, SingleSignOnKey);
  delete queryData.ssoToken;

  if (!userData.id) {
    throw new Error('Missing id in user data');
  } else if (userData.email && !validateInput.email(userData.email)) {
    throw new Error('Invalid email in user data');
  } else if (!userData.nayme) {
    //It looks like there is typo in token generation code.
    //The name property is misspelled as nayme
    //I currently do not have access to token generation code so fixed here but 
    //ideal place to fix this is in token generator.
    throw new Error('Missing name in user data');
  }

  return userData;
}

module.exports = authenticateUser;
