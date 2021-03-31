import { Get, Post, Body, Put, Delete, Param, Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto, UpdateOrganizationDto, ListOrganizationDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags("organizations")
export class OrganizationController {

  constructor(private readonly organizationService: OrganizationService) {}

  @Get('organizations')
  async findAll(): Promise<ListOrganizationDTO[]> {
    return await this.organizationService.findAll();
  }

  @Get('organization/:id')
  async findById(@Param('id') id: string): Promise<ListOrganizationDTO | undefined> {
    return await this.organizationService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post('organization')
  async create(@Body() organizationData: CreateOrganizationDto) {
    return this.organizationService.create(organizationData);
  }

  @Put('organization/:id')
  async update(@Param('id') id: string, @Body() organizationData: UpdateOrganizationDto) {
    return await this.organizationService.update(id, organizationData);
  }

  @Delete('organization/:id')
  async delete(@Param('id') id: string) {
    return await this.organizationService.delete(id);
  }
}