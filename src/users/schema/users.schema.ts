import { UserEntity } from 'src/user.entity';
import { EntitySchema } from 'typeorm';

export const UserSchema = new EntitySchema<UserEntity>({
  name: 'UserEntity',
  target: UserEntity,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    password: {
      type: String,
    },
  },
});
