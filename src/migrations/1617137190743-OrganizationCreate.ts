import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class OrganizationCreate1617137190743 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'organizations',
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                  isUnique: true,
                  generationStrategy: 'uuid',
                  default: `uuid_generate_v4()`
                },
                {
                  name: 'name',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                  name: 'description',
                  type: 'varchar',
                  isNullable: true,
                },
              ],
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('organizations');
    }

}
