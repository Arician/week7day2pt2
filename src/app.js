const yargs = require("yargs");

const {
  addMovie,
  listMovies,
  findMovie,
  deleteMovie,
  updateMovie,
} = require("./utils");
const { connection, client } = require("./db/connection");

const app = async (yargsObj) => {
  const collection = await connection();
  if (yargsObj.add) {
    await addMovie(collection, {
      title: yargsObj.title,
      actor: yargsObj.actor,
      genre: yargsObj.genre,
      director: yargsObj.director,
    });
    console.log("successfully added new document to database");
  } else if (yargsObj.list) {
    await listMovies(collection);
  } else if (yargsObj.findByTitle) {
    await findMovie(collection, { title: yargsObj.title });
  } else if (yargsObj.findByActor) {
    await findMovie(collection, { actor: yargsObj.actor });
  } else if (yargsObj.findByGenre) {
    await findMovie(collection, { genre: yargsObj.genre });
  } else if (yargsObj.findByDirector) {
    await findMovie(collection, { director: yargsObj.director });
  } else if (yargsObj.deleteByTitle) {
    await deleteMovie(collection, { title: yargsObj.title });
  } else if (yargsObj.update) {
    await updateMovie(
      collection,
      { title: yargsObj.title },
      {
        $set: {
          actor: yargsObj.actor,
          genre: yargsObj.genre,
          director: yargsObj.director,
        },
      }
    );
  } else {
    console.log("incorrect command line arguments");
  }
  await client.close();
};

app(yargs.argv);
