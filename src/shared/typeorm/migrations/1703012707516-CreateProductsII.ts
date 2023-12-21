import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1702997620367 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            // Defina o valor padrão como NULL
            default: "NULL",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "price",
            type: "decimal(10,2)",
          },
          {
            name: "quantity",
            type: "int",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );

    // Atualize os valores da coluna "id" usando uuid-ossp.uuid_generate_v4()
    await queryRunner.query(
      "UPDATE products SET id = uuid-ossp.uuid_generate_v4() WHERE id IS NULL",
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }
}
