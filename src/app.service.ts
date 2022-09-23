import { Injectable } from '@nestjs/common';
import { HelloResponse } from './hello-response';

@Injectable()
export class AppService {
  async getHello(): Promise<HelloResponse> {
    return { message: 'Hello, World!' };
  }
}
