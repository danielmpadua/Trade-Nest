import { EntityRepository, Repository } from 'typeorm';
import { OrganizationEntity } from './organization.entity';
import { CreateOrganizationDto, UpdateOrganizationDto, ListOrganizationDTO } from './dto';

@EntityRepository(OrganizationEntity)
export class OrganizationRepository extends Repository<OrganizationEntity> {
    async getAll(): Promise<ListOrganizationDTO[]> {
        const query = this.createQueryBuilder("organization")
            .select(["organization.id", "organization.name", "organization.description"])
            .execute();

        return query;
    }

    async getById(id: string): Promise<ListOrganizationDTO | undefined> {
        const query = this.createQueryBuilder("organization")
            .select(["organization.id", "organization.name", "organization.description"])
            .where("organization.id = :id", { id })
            .execute();

        return query;
    } 

    async createOrganization(organizationDTO: CreateOrganizationDto): Promise<any> {
        const {name, description} = organizationDTO;

        let newOrganization = new OrganizationEntity();
        newOrganization.name = name;
        newOrganization.description = description;
        
        return await this.save(newOrganization);
    }

    async updateOrganization(id: string, organizationDTO: UpdateOrganizationDto): Promise<any> {
        const toUpdate = await this.findOne(id);
        const updated = Object.assign(toUpdate, organizationDTO);
        
        return await this.save(updated);
    }

    async deleteOrganization(id: string): Promise<any> {
        return await this.delete(id);
    }
}
