import { ApiProperty } from '@nestjs/swagger';

export class HelloResponse {
  @ApiProperty({ description: 'Message', required: true })
  message: string;
}
