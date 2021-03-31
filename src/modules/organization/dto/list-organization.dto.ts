import { ApiProperty } from '@nestjs/swagger';

export class ListOrganizationDTO {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description?: string;
}
