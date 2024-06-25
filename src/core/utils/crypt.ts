// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

export default async function crypt(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}
