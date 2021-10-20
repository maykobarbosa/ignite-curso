import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): void {
    // Complete aqui
    const userEmailAlreadyExists = this.usersRepository.findByEmail(email)

    if(userEmailAlreadyExists){
      throw new Error('Email Already exists!')
    }
    this.usersRepository.create({name, email})
    
  }
}

export { CreateUserUseCase };
