# Prisma

### Updating the schema
1. `npx prisma migrate dev --name init_schema`

2. Running this will create a new file:
`prisma/migrations/20xxxxxxx_init_schema`

3. Inside the file will be some SQL:
    ```sql
    CREATE TABLE "Owner" (...)
    CREATE TABLE "Team" (...)
    CREATE TABLE "Season" (...)
    CREATE TABLE "Week" (...)
    CREATE TABLE "Match" (...)
    CREATE TABLE "OwnerSeason" (...)
    ALTER TABLE ... ADD CONSTRAINT ...
    ```

4. Take the sql and add it to Neon DB
---
### Common Mistakes
1. Avoid `db push`, use `migrate` as this is like commits for SQL, keeps a version control record for future changes
2. Make sure you check the DB name matches the intended environment
3. If you need to edit further:
    ```
    edit schema.prisma →
    npx prisma migrate dev --name another_change
    ```
---
