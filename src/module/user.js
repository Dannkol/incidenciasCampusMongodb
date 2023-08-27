import { mongoConn , getDB } from "../config/dbconfig.js";

async function findUser(data){
    const client = await mongoConn();
    try {
        const db = getDB("incidensias");
        const collection = db.collection('usuarios');
        const query = {
            $and : [
                { email: data.email },
                { password: data.password }
            ]
        }

        const projection = {
            projection: {
              id: { $toString: "$_id" }, 
              nombre: 1,
              rol: 1,
              email: 1,
              password: 1,
            },
          };

        const result = await collection.findOne(query, projection)
          console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }finally{
        await client.close();
    }

}

export { findUser }