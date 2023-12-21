import { AppDataSource } from "src/data-source";
import { app } from "src/shared/http/server";

const PORT = process.env.DB_PORT as number | undefined;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err =>
    console.error(`Error during Data Source initialization: ${err}`),
  );
