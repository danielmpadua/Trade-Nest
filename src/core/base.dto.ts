import { ApiProperty } from '@nestjs/swagger';

export class ListUserDTO {
  @ApiProperty()
  readonly id: string;
}
