import { ApiProperty } from '@nestjs/swagger';

export class ListUserDTO {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;
}
