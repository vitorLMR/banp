import BaseEntity from 'src/core/database/domain/entities/base.entity';
import Game from 'src/modules/game/domain/entities/game.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import UserSignup from './user-signup.entity';
import Category from 'src/modules/recommendation/domain/entities/category.entity';

@Entity({ name: 'users' })
export default class User extends BaseEntity {
  @Column({ name: 'name' })
  public name: string;

  @Column({ name: 'email' })
  public email: string;

  @Column({ name: 'password' })
  public password: string;

  @Column({ name: 'image' })
  public image: string;

  @Column({ name: 'birth_date' })
  public birthDate: Date;

  @OneToOne(() => UserSignup)
  @JoinColumn({ name: 'signup_id' })
  public signupCredentials: UserSignup;

  @ManyToMany(
    () => Game,
    (game) => game.users, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'user_games',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'game_id',
      referencedColumnName: 'id',
    },
  })
  public games: Game[];

  @ManyToMany(
    () => Category,
    (category) => category.profiles, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'user_profile',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  public profile: Category[];

  @ManyToMany(
    () => Category,
    (category) => category.desires, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'user_desire',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
    },
  })
  public desire: Category[];
}