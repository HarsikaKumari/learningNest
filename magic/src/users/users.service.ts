import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: "harsika",
            email: "harsika@gmail.com",
        },
        {
            id: 2,
            name: "sheetal",
            email: "sheetal@gmail.com"
        },
    ];

    findOneByEmail(email: string): User | undefined {
        return this.users.find((user) => user.email === email);
    }
}
