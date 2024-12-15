import * as bcrypt from 'bcrypt';

export function hashPassword(password: string, saltRounds: 10) {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
}

export function comparePassword(password: string, hashedPassword: string) {
  return bcrypt.compareSync(password, hashedPassword);
}
