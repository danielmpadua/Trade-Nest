import { ApiProperty } from '@nestjs/swagger';

export class ListUserDTO {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;
}
