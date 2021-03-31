import { ApiProperty } from '@nestjs/swagger';

export class ListUserDTO {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly created_at: Date;

  @ApiProperty()
  readonly updated_at: Date;
}
