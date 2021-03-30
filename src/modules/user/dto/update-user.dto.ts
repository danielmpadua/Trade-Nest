import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  readonly name: string;
  
  @ApiProperty()
  readonly email: string;
}
