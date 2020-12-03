
import { myKey} from "./key";
const dbName = 'dbtodolist';

class Db {
    dblocal = `mongodb://localhost/${dbName}`;
    dbcloud = `mongodb+srv://antonioOlvera:${myKey}@cluster0.uw3yy.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    dbdeprecado = { useNewUrlParser: true, useUnifiedTopology: true };

}
export const db = new Db();