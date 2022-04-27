exports.addMovie = async (collection, movieObj) => {
  try {
    const addEntry = await collection.insertOne(movieObj);
    console.log(addEntry);
  } catch (err) {
    console.log(err);
  }
};

exports.listMovies = async (collection) => {
  try {
    const movieList = await collection.find().toArray();
    console.log(movieList);
  } catch (err) {
    console.log(err);
  }
};
exports.findMovie=async(collection,movieObj)=>{
    try{
        const movieList=await collection.find(movieObj).toArray();
        console.log(movieList);
    }catch (err) {console.log(err);}
}
exports.deleteMovie=async(collection,movieObj)=>{
    try{
        const removeEntry = await collection.deleteOne(movieObj)
        console.log(removeEntry);
    }catch (err) {console.log(err)}
}
exports.updateMovie=async(collection,movieObj,updateObj)=>{
    try{
        const update = await collection.updateOne(movieObj,updateObj)
        console.log(update)
    }catch (err) {console.log(err)}
}