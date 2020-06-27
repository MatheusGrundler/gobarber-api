import AppError from '@shared/errors/appError';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/Fakes/FakeCacheProvider';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

let fakeUsersRepository: FakeUserRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let fakecacheProvider: FakeCacheProvider;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUserRepository();
    fakeHashProvider = new FakeHashProvider();
    fakecacheProvider = new FakeCacheProvider();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider,
      fakecacheProvider,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'john Doe',
      email: 'johnDoe@exemple.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a user with the same email from another', async () => {
    await createUser.execute({
      name: 'john Doe',
      email: 'johnDoe@exemple.com',
      password: '123456',
    });

    await expect(
      createUser.execute({
        name: 'john Doe',
        email: 'johnDoe@exemple.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
