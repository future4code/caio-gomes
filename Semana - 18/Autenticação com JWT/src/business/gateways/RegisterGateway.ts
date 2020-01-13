import { User } from './../entities/User';
import {RegisterUserOutput } from './../usecases/User/RegisterUser';
export interface RegisterUserGateway {
    createUser(input: User ): Promise<void>;
}