import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { HelloResponse } from './hello-response';

@ApiTags('Example')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  @ApiOperation({
    summary: 'Summary description',
    description: 'Longer /hello example api description',
  })
  @ApiOkResponse({
    description: 'The hello message has been successfully retrieved.',
    type: HelloResponse,
  })
  getHello(): Promise<HelloResponse> {
    return this.appService.getHello();
  }
}
