import { ICommand } from '@nestjs/cqrs';

class GetHelloCommand implements ICommand {}

export default GetHelloCommand;
