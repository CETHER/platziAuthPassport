//Arhivo para exporta la librería de mongo
const MongoLib = require('../lib/mongo');

class UserMoviesService {
  constructor() {
    this.collection = 'user-movies';
    //Nueva instancia de la librería de mongo
    this.mongoDB = new MongoLib();
  }

  //Métodos
  //Obtener peliculas de usuario a aprtir de id de usuario
  async getUserMovies({ userId }) {
    const query = userId && { userId };
    // Método de mongo
    const userMovies = await this.mongoDB.getAll(this.collection, query);

    return userMovies || [];
  }

  //Crear una pelicula o añadir pelicula al usuario
  async createUserMovie({ userMovie }) {
    const createUserMovieId = await this.mongoDB.create(
      this.collection,
      userMovie
    );

    return createUserMovieId;
  }

  //Eliminar una pelicula de sus favoritos
  async deleteUserMovie({ userMovieId }) {
    const deleteUserMovieId = await this.mongoDB.delete(
      this.collection,
      userMovieId
    );

    return deleteUserMovieId;
  }
}

module.exports = UserMoviesService;
