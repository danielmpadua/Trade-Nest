import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrganizationDto {
  @ApiProperty()
  readonly name: string;
  
  @ApiProperty()
  readonly description: string;
}